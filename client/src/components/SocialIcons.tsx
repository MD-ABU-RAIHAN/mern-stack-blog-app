import {
  BlockStack,
  Button,
  Icon,
  InlineStack,
  Tooltip,
} from "@shopify/polaris";
import { ChatIcon, ViewIcon, ThumbsUpIcon } from "@shopify/polaris-icons";

const SocialIcons = () => {
  return (
    <div>
      <InlineStack>
        <BlockStack>
          <Tooltip content="Likes">
            <Button
              variant="tertiary"
              icon={<Icon source={ThumbsUpIcon} tone="base" />}
              size="large"
              disabled={false}
            >
              {"99"}
            </Button>
          </Tooltip>
        </BlockStack>
        <BlockStack>
          <Tooltip content="Comment">
            <Button
              variant="tertiary"
              icon={<Icon source={ChatIcon} tone="base" />}
              size="large"
              disabled={false}
            >
              {"44"}
            </Button>
          </Tooltip>
        </BlockStack>
        <BlockStack>
          <Tooltip content="Views">
            <Button
              variant="tertiary"
              icon={<Icon source={ViewIcon} tone="base" />}
              size="large"
              disabled={true}
            >
              {"89"}
            </Button>
          </Tooltip>
        </BlockStack>
      </InlineStack>
    </div>
  );
};

export default SocialIcons;
