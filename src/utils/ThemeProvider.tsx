import { ConfigProvider, theme } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const ThemeProvider: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Outlet />
    </ConfigProvider>
  );
};

export default ThemeProvider;
