import { Button, Icon } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";

const AddNewBlog = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="primary"
      size="large"
      onClick={() => {
        navigate("/blog/new");
      }}
      icon={<Icon source={PlusIcon} />}
    >
      Add New Blog
    </Button>
  );
};

export default AddNewBlog;
