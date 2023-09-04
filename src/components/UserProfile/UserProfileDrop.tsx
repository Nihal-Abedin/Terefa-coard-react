import { UserOutlined } from "@ant-design/icons";
import { Dropdown, type MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const UserProfileDrop = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>1st menu item</p>,
    },
    {
      key: "2",
      label: <p>Logout</p>,
      danger: true,
      onClick: () => {
        localStorage.removeItem("TERAFE_TOKEN");
        navigate("/", { replace: true });
      },
    },
  ];

  return (
    <div className="w-4 h-4">
      <Dropdown menu={{ items }} placement="bottom">
        <UserOutlined />
      </Dropdown>
    </div>
  );
};

export default UserProfileDrop;
