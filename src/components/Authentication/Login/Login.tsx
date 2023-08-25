import { Button, Form, Input } from "antd";
import { passwordRules, userEmailRules } from "./login-form-rules";
import { LoginFormTypes } from "../../../types/authentication-types";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../query/mutations/auth";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useLogin();
  const onFinish = (values: LoginFormTypes) => {
    mutateAsync(values, {
      onSuccess: (data) => {
        localStorage.setItem("TERAFE_TOKEN", data.token);
        toast(data?.message);
        navigate("/taskboard", { replace: true });
      },
      onError: (err) => {
        console.log(err);
        toast.error(err?.message);
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
          <Form.Item<LoginFormTypes> name="email" rules={userEmailRules}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item<LoginFormTypes> name="password" rules={passwordRules}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <hr className="border-t-1 text-neutral-500" />
        <p
          className="mt-5 cursor-pointer text-center text-blue-500 "
          onClick={() => navigate("/signup")}
        >
          Sign up for an account
        </p>
      </div>
    </div>
  );
};

export default Login;
