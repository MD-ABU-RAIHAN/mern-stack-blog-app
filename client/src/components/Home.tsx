import BlogCard from "./Card/BlogCard";
import { Card } from "@shopify/polaris";

const Home = () => {
  return (
    <div>
      <Card>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Card>
    </div>
  );
};

export default Home;
