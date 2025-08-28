import {
  Avatar,
  BlockStack,
  Button,
  ButtonGroup,
  Card,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { DeleteIcon, EditIcon } from "@shopify/polaris-icons";

const CommentCard = () => {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <InlineStack align="space-between">
          <InlineStack align="start" gap={"300"}>
            <BlockStack>
              <Avatar size="md" source="" name="userName" />
            </BlockStack>
            <BlockStack>
              <Text as="h4" variant="headingSm">
                User Name
              </Text>

              <Text as="p" variant="bodyMd">
                Comment Body Writen by User
              </Text>
            </BlockStack>
          </InlineStack>

          <BlockStack>
            <ButtonGroup>
              <Button
                icon={DeleteIcon}
                variant="tertiary"
                tone="critical"
                onClick={() => {}}
                accessibilityLabel="Delete"
              />
              <Button
                icon={EditIcon}
                variant="tertiary"
                onClick={() => {}}
                accessibilityLabel="Edit"
              />
            </ButtonGroup>
          </BlockStack>
        </InlineStack>
      </BlockStack>
    </Card>
  );
};

export default CommentCard;
