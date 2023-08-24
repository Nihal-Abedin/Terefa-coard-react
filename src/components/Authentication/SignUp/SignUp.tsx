import { Button, Form, Input } from "antd";
import { SignupFormTypes } from "../../../types/authentication-types";
import {
  confirmPasswordRules,
  passwordRules,
  userEmailRules,
} from "../Login/login-form-rules";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../../query/mutations/auth";
import { toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useSignup();
  const onFinish = (values: SignupFormTypes) => {
    mutate(values, {
      onSuccess: (data) => {
        localStorage.setItem("TERAFE_TOKEN", data.token);
        toast(data?.message);
        navigate("/tasks", { replace: true });
      },
      onError: (err) => {
        console.log(err.message);
      },
    });
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center shadow-lg ">
      <div className="shadow-blue-300/100 m-1 w-96 bg-white p-10 shadow-lg rounded-lg">
        {/* <img src={logo} alt="Logo" className="mx-auto block w-40" /> */}

        <h3 className="my-5 text-center text-neutral-500">Terafe</h3>
        <Form
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          className="justify-centet align-center mt-7 flex-row"
        >
          <Form.Item<SignupFormTypes> name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item<SignupFormTypes> name="email" rules={userEmailRules}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item<SignupFormTypes> name="password" rules={passwordRules}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item<SignupFormTypes>
            name="confirm_password"
            rules={confirmPasswordRules}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full"
            >
              Signup
            </Button>
          </Form.Item>
        </Form>

        <hr className="border-t-1 text-neutral-500" />
        <p
          className="mt-5 cursor-pointer text-center text-blue-500 "
          onClick={() => navigate("/")}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
};

export default Signup;
