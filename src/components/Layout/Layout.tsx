import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto,1fr] h-screen">
      <Header />
      <div className="py-3 px-2 grid grid-cols-1 grid-rows-[auto,1fr]">
        <h1>Body Header</h1>
        <div className="py-3 px-2 overflow-x-auto bg-yellow-200">
          <span>TAKS</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
