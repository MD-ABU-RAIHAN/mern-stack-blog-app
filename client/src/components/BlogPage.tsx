import {
  Avatar,
  BlockStack,
  Card,
  Divider,
  InlineStack,
  Text,
} from "@shopify/polaris";

import SocialIcons from "./SocialIcons";
import CommentCard from "./Card/CommentCard";
import CommentForm from "./Forms/CommentForm";

const BlogPage = () => {
  return (
    <Card>
      <BlockStack gap={"600"}>
        <BlockStack align="center" gap="100">
          <InlineStack align="space-between" blockAlign="center">
            <BlockStack gap={"200"}>
              <Text as="h2" variant="headingXl" alignment="start">
                {"BLog Title Here BlogPage"}
              </Text>
              <Text as="h2" variant="bodyLg" alignment="start">
                {
                  "Blog Short Description Analytics & Insights, Manage, edit, and track all your blog posts"
                }
              </Text>
            </BlockStack>
          </InlineStack>
        </BlockStack>

        <BlockStack>
          <img src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850" />
        </BlockStack>
        <BlockStack gap={"200"}>
          <InlineStack align="space-between" blockAlign="center">
            <BlockStack gap={"200"}>
              <Text as="h2" variant="headingLg" alignment="start">
                {"Post Details"}
              </Text>
              <InlineStack gap={"200"}>
                <Text
                  as="h2"
                  variant="bodyMd"
                  tone="disabled"
                  alignment="start"
                >
                  Hosted by {"4-04-2025"},
                </Text>
                <Text as="h4" variant="headingSm">
                  <InlineStack gap={"100"}>
                    <Avatar size="xs" source="" name="userName" />
                    User Name
                  </InlineStack>
                </Text>
              </InlineStack>
            </BlockStack>
            <BlockStack align="end">
              <SocialIcons />
            </BlockStack>
          </InlineStack>
          <Divider borderColor="input-border" />
        </BlockStack>
        <BlockStack>
          <Text variant="bodyMd" as="p">
            The quick brown fox has jumped over the lazy dog the quick brown fox
            has jumped over the lazy dog the quick brown fox has jumped over the
            lazy dog the quick brown fox has jumped over the lazy dog
          </Text>
        </BlockStack>
        {/* Reviews and Comment */}
        <BlockStack gap={"400"}>
          {/* Comment form */}
          <CommentForm />
          <CommentCard />
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default BlogPage;
