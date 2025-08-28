import {
  BlockStack,
  Button,
  ButtonGroup,
  Card,
  Divider,
  FormLayout,
  Icon,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import {
  CollectionIcon,
  EnvelopeSoftPackIcon,
  PlusIcon,
  SelectIcon,
  TextWithImageIcon,
} from "@shopify/polaris-icons";

import { Controller, useForm, type FieldValues } from "react-hook-form";

const BlogForm = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      sortDescription: "",
      imgUrl: "",
      description: "",
      category: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Card>
      <BlockStack gap={"600"}>
        <BlockStack align="center" gap="100">
          <BlockStack align="center" gap="200">
            <Text as="h2" variant="headingXl" alignment="center">
              Add Your New Blogs
            </Text>
            <Text as="h2" variant="bodyLg" alignment="center">
              Use this page to add new blog posts to your website. Once
              published,
              <br /> your blog will be visible to your readers.
            </Text>
          </BlockStack>

          <Divider borderColor="input-border" />
        </BlockStack>
        <BlockStack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLayout>
              <Controller
                control={control}
                name="title"
                rules={{
                  required: "Title is required",
                }}
                render={({ field }) => (
                  <TextField
                    label="Blog Title"
                    value={field.value}
                    onChange={field.onChange}
                    autoComplete="off"
                    error={errors?.title?.message}
                    placeholder="Enter your blog title"
                  />
                )}
              />
              <Controller
                control={control}
                name="imgUrl"
                rules={{
                  required: "Image Url is required",
                }}
                render={({ field }) => (
                  <TextField
                    label="Image Url"
                    value={field.value}
                    onChange={field.onChange}
                    autoComplete="off"
                    error={errors?.title?.message}
                    placeholder="Enter your blog image url"
                  />
                )}
              />

              <Controller
                name="sortDescription"
                control={control}
                rules={{
                  required: "Sort description is required",
                  maxLength: {
                    value: 100,
                    message: "write sort description with in 100 character",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter sort description with in 100 character"
                    label="Sort Description"
                    error={errors?.sortDescription?.message}
                    autoComplete="off"
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                rules={{
                  required: "Description is required",
                }}
                render={({ field }) => (
                  <TextField
                    value={field.value}
                    multiline={4}
                    onChange={field.onChange}
                    placeholder="Enter description"
                    label="Sort Description"
                    error={errors?.sortDescription?.message}
                    autoComplete="off"
                  />
                )}
              />

              <FormLayout.Group>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: "Select blog category" }}
                  render={({ field }) => (
                    <Select
                      label="Blog Category"
                      value={field.value}
                      onChange={field.onChange}
                      error={errors?.category?.message}
                      options={[
                        {
                          label: "Select Category",
                          value: "",
                          prefix: <Icon source={SelectIcon} />,
                        },
                        {
                          label: "Design",
                          value: "design",
                          prefix: <Icon source={TextWithImageIcon} />,
                        },
                        {
                          label: "Software",
                          value: "software",
                          prefix: <Icon source={EnvelopeSoftPackIcon} />,
                        },
                        {
                          label: "Others",
                          value: "others",
                          prefix: <Icon source={CollectionIcon} />,
                        },
                      ]}
                    />
                  )}
                />
              </FormLayout.Group>

              <BlockStack>
                <ButtonGroup fullWidth connectedTop>
                  <Button onClick={reset} size="large">
                    Reset
                  </Button>
                  <Button onClick={reset} size="large">
                    Cancel
                  </Button>
                  <Button
                    size="large"
                    icon={<Icon source={PlusIcon} />}
                    submit
                    variant="primary"
                  >
                    Add Blog
                  </Button>
                </ButtonGroup>
              </BlockStack>
            </FormLayout>
          </form>
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default BlogForm;
