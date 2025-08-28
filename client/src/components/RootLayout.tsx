import { Frame, Page } from "@shopify/polaris";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-orange-100 min-h-screen">
      <Frame>
        <Page>
          <Navbar />

          <Outlet />
        </Page>
      </Frame>
    </div>
  );
};

export default RootLayout;
