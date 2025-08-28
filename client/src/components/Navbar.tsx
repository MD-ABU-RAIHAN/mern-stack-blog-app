import {
  ActionList,
  Avatar,
  BlockStack,
  Button,
  Card,
  Icon,
  InlineStack,
  Popover,
  Tooltip,
} from "@shopify/polaris";
import { LayoutDashboard } from "lucide-react";
import {
  ExitIcon,
  BlogIcon,
  ProfileIcon,
  PlusIcon,
} from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginSignUpButton from "./Buttons/LoginSignUpButton";

const Navbar = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const activator = (
    <Tooltip content="Your profile">
      <Button
        variant="plain"
        icon={
          <div className="border p-2 border-gray-200 rounded-full bg-indigo-200 hover:scale-105 duration-300 cursor-pointer ">
            <Avatar name="Farrah" size="xl" />
          </div>
        }
        onClick={toggleActive}
      />
    </Tooltip>
  );
  return (
    <Card>
      <InlineStack align="space-between">
        <BlockStack align="center">
          <img
            alt="Appcues logo"
            src="https://cdn.prod.website-files.com/685d3f27e667cdf05fe197ee/685d3f27e667cdf05fe1984f_Appcues-Logo.svg"
            className="w-48 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </BlockStack>

        <BlockStack align="center">
          <LoginSignUpButton />

          {/* <Popover active={active} activator={activator} onClose={toggleActive}>
            <ActionList
              items={[
                {
                  content: "Profile",
                  prefix: <Icon source={ProfileIcon} />,
                  destructive: false,
                  variant: "menu",
                },
                {
                  content: "My Blogs",
                  prefix: <Icon source={BlogIcon} />,
                  destructive: false,
                  variant: "menu",
                  onAction: () => {
                    navigate("/myblog");
                  },
                },
                {
                  content: "Dashboard",
                  prefix: <LayoutDashboard className="w-4" />,
                  destructive: false,
                  variant: "menu",
                  onAction: () => {
                    navigate("/dashboard");
                  },
                },
                {
                  content: "Add New Blog",
                  prefix: <Icon source={PlusIcon} />,
                  variant: "menu",
                  destructive: false,
                  onAction: () => {
                    navigate("/blog/new");
                  },
                },
                {
                  content: "Log Out",
                  prefix: <Icon source={ExitIcon} />,
                  destructive: true,
                  variant: "menu",
                },
              ]}
            />
          </Popover> */}
        </BlockStack>
      </InlineStack>
    </Card>
  );
};

export default Navbar;
