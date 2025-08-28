import {
  BlockStack,
  Button,
  Card,
  FormLayout,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import { Controller, useForm, type FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <BlockStack align="center" gap={"400"}>
          <InlineStack align="center">
            <img
              className="w-40 h-16"
              src="https://cdn.prod.website-files.com/685d3f27e667cdf05fe197ee/685d3f27e667cdf05fe1984f_Appcues-Logo.svg"
              alt=""
            />
          </InlineStack>

          <Text as="h2" alignment="center" variant="heading2xl">
            Welcome back
          </Text>
          <Text alignment="center" as="p" variant="bodyLg">
            Sign in to manage your blog
          </Text>

          {/* Tab Content rendered Separately */}
          <div className="pt-4 px-4 pb-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLayout>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      type="email"
                      label="Email"
                      value={field.value}
                      error={errors?.email?.message}
                      onChange={field.onChange}
                      autoComplete="email"
                      placeholder="Enter your email"
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      type="password"
                      label="Password"
                      error={errors?.password?.message}
                      value={field.value}
                      onChange={field.onChange}
                      autoComplete="off"
                      placeholder="Enter your password "
                    />
                  )}
                />
                {/* 
                  {isLoginFailed && (
                    <Text as="p" tone="critical" alignment="center">
                      Login failed. Please check your email and password.
                    </Text>
                  )} */}
                <Button variant="primary" submit fullWidth size="large">
                  Sign In
                </Button>
                <Text tone="subdued" alignment="center" as="p">
                  Don't have an account?{" "}
                  <Button
                    onClick={() => navigate("/user/signup")}
                    variant="plain"
                  >
                    Sign up
                  </Button>
                </Text>
              </FormLayout>
            </form>
          </div>
        </BlockStack>
      </Card>
    </div>
  );
};

export default SigninForm;
