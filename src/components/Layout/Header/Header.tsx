import { Switch } from "antd";
import UserProfileDrop from "../../UserProfile/UserProfileDrop";

const Header = () => {
  return (
    <div className="bg-[var(--color-grey-800)] text-[var(--color-grey-400)] py-3 px-2 grid grid-cols-[3fr,1fr] grid-rows-1 items-center drop-shadow-lg">
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
        <div className=" rounded-full bg-black flex justify-center items-center p-2">
          <UserProfileDrop />
        </div>
      </div>
    </div>
  );
};

export default Header;
