import { BlockStack, Card, Divider, InlineStack, Text } from "@shopify/polaris";
import BlogCard from "./Card/BlogCard";
import AddNewBlog from "./Buttons/AddNewBlog";

const Myblog = () => {
  return (
    <Card>
      <BlockStack gap={"600"}>
        <BlockStack align="center" gap="100">
          <InlineStack align="space-between" blockAlign="center">
            <BlockStack>
              <Text as="h2" variant="headingXl" alignment="start">
                All Your Blogs
              </Text>
              <Text as="h2" variant="bodyLg" alignment="start">
                Manage, edit, and track all your blog posts in one place.
              </Text>
            </BlockStack>
            <BlockStack>
              <AddNewBlog />
            </BlockStack>
          </InlineStack>
          <Divider borderColor="input-border" />
        </BlockStack>
        <BlockStack gap={"400"}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default Myblog;
