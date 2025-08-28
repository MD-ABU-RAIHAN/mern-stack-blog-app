import { BlockStack, Card, Divider, InlineStack, Text } from "@shopify/polaris";
import BlogCard from "./Card/BlogCard";
import { MessageSquareMore, NotebookPen, ThumbsUp } from "lucide-react";
import AddNewBlog from "./Buttons/AddNewBlog";

const Dashboard = () => {
  return (
    <Card>
      <BlockStack gap={"600"}>
        <BlockStack align="center" gap="100">
          <InlineStack align="space-between" blockAlign="center">
            <BlockStack>
              <Text as="h2" variant="headingXl" alignment="start">
                Your Blog Dashboard
              </Text>
              <Text as="h2" variant="bodyLg" alignment="start">
                Analytics & Insights, Manage, edit, and track all your blog
                posts
              </Text>
            </BlockStack>
            <BlockStack>
              <AddNewBlog />
            </BlockStack>
          </InlineStack>
          <Divider borderColor="input-border" />
        </BlockStack>
        <BlockStack>
          <div className="flex flex-col gap-4 md:grid grid-cols-3 md:gap-2">
            {/* Total Blog Posts */}
            <Card background="bg-surface-secondary">
              <InlineStack align="space-between">
                <BlockStack gap={"300"}>
                  <Text as="h2" variant="headingLg">
                    {"Total Blog"}
                  </Text>
                  <Text as="h2" tone="critical" variant="heading2xl">
                    <span className="text-indigo-600 "> {"33"}</span>
                  </Text>
                </BlockStack>
                <BlockStack align="center">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 p-3 flex items-center justify-center">
                    <NotebookPen className="w-10 h-10" />
                  </div>
                </BlockStack>
              </InlineStack>
            </Card>
            {/* Total Like Posts */}
            <Card background="bg-surface-secondary">
              <InlineStack align="space-between">
                <BlockStack gap={"300"}>
                  <Text as="h2" variant="headingLg">
                    {"Total Likes"}
                  </Text>
                  <Text as="h2" tone="critical" variant="heading2xl">
                    <span className="text-indigo-600 "> {"33"}</span>
                  </Text>
                </BlockStack>
                <BlockStack align="center">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 p-3 flex items-center justify-center">
                    <ThumbsUp className="w-10 h-10" />
                  </div>
                </BlockStack>
              </InlineStack>
            </Card>
            {/* Total Comment Posts */}
            <Card background="bg-surface-secondary">
              <InlineStack align="space-between">
                <BlockStack gap={"300"}>
                  <Text as="h2" variant="headingLg">
                    {"Comments"}
                  </Text>
                  <Text as="h2" tone="critical" variant="heading2xl">
                    <span className="text-indigo-600 "> {"33"}</span>
                  </Text>
                </BlockStack>
                <BlockStack align="center">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 p-3 flex items-center justify-center">
                    <MessageSquareMore className="w-10 h-10" />
                  </div>
                </BlockStack>
              </InlineStack>
            </Card>
          </div>
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

export default Dashboard;
