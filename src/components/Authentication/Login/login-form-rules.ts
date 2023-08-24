import type { Rule } from "rc-field-form/lib/interface";
import isEmail from 'validator/lib/isEmail';


export const userEmailRules: Rule[] = [
    {
        required: true,
        type: "email",
        validator: async (_, value) => {
            if (!value) {
                return Promise.reject(new Error("This Field is required!"));

            }
            if (value && !isEmail(value)) {
                return Promise.reject(new Error("Not a valid Email!"));
            }

        },
    },
];
//rules={[{ type: 'email' }]}
export const passwordRules: Rule[] = [
    {
        required: true,
        min: 8,
        validator: async (_, value) => {
            if (!value || value?.length === 0) {
                return Promise.reject(new Error("This Field is required"));
            }
            if (value?.length < 8) {
                return Promise.reject(new Error("Minimun 8 characters!"));
            }

        },
    },
];
export const confirmPasswordRules: Rule[] = [
    {
        required: true,
        min: 8,
        validator: async (_, value) => {
            if (!value || value?.length === 0) {
                return Promise.reject(new Error("This Field is required"));
            }
            if (value?.length < 8) {
                return Promise.reject(new Error("Minimun 8 characters!"));
            }

        },
    }, ({ getFieldValue }) => ({
        validator(_, value) {
            if (value?.length === 0) {
                return Promise.reject(new Error("Minimun 8 characters!"));
            }
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Passwords does not match!'));
        },
    }),
];