import {
  BlockStack,
  Button,
  FormLayout,
  InlineStack,
  TextField,
} from "@shopify/polaris";
import { Controller, useForm, type FieldValues } from "react-hook-form";

const CommentForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      comment: "",
    },
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };
  return (
    <BlockStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLayout>
          <Controller
            name="comment"
            control={control}
            rules={{ required: "Comment is required" }}
            render={({ field }) => (
              <TextField
                label=""
                placeholder="Write your comment"
                multiline={2}
                value={field.value}
                onChange={field.onChange}
                autoComplete="off"
                error={errors?.comment?.message}
              />
            )}
          />

          <InlineStack gap="400">
            <Button variant="primary" submit>
              Comment
            </Button>
            <Button onClick={reset}>Cancel</Button>
          </InlineStack>
        </FormLayout>
      </form>
    </BlockStack>
  );
};

export default CommentForm;
