import { MediaCard } from "@shopify/polaris";
import SocialIcons from "../SocialIcons";

const BlogCard = () => {
  return (
    <div className="relative w-full">
      <MediaCard
        title={"Empowering Entrepreneurs"}
        primaryAction={{
          plain: true,
          content: "Read more",
          onAction: () => {},
        }}
        description="Discover how Shopify can power up your entrepreneurial journey."
        popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
        />
      </MediaCard>

      <div className="absolute z-10 right-5 bottom-4">
        <SocialIcons />
      </div>
    </div>
  );
};

export default BlogCard;
