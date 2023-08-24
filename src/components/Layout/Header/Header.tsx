import { UserOutlined } from "@ant-design/icons";
import { Switch } from "antd";

const Header = () => {
  return (
    <div className="bg-[var(--color-grey-800)] text-[var(--color-grey-400)] py-3 px-2 grid grid-cols-[3fr,1fr] grid-rows-1 items-center">
      <div>
        <h3>Terefa</h3>
      </div>
      <div className="flex justify-end items-center w-full gap-3">
        <Switch
          checkedChildren={<p>Dark</p>}
          unCheckedChildren={<p>Light</p>}
          checked={false}
          disabled
        />
        <div className="w-3 h-3 rounded-full bg-black flex justify-center items-center p-4">
          <UserOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
