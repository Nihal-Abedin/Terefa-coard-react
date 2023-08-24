export interface LoginFormTypes {
    email?: string;
    password?: string;
}

export interface SignupFormTypes extends LoginFormTypes {
    confirm_password?: string;
    name?: string;
}