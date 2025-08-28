import {
  BlockStack,
  Button,
  Card,
  FormLayout,
  InlineStack,
  Text,
  TextField,
  Toast,
} from "@shopify/polaris";
import { Controller, useForm, type FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { trpc } from "../../utils/trpc";
import { useState } from "react";

const SigninForm = () => {
  const [loginMessage, setLoginMessage] = useState<{
    message: string;
    loginFail: boolean;
  } | null>(null);

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

  ////

  const login = trpc.user.login.useMutation({
    onSuccess: (data) => {
      setLoginMessage({
        message: "Login Successful 🎉",
        loginFail: false,
      });
      console.log(data);
    },
    onError: (error) => {
      setLoginMessage({ message: error.message, loginFail: true });
      console.log(error);
    },
  });
  const onSubmit = async (data: FieldValues) => {
    const result = await login.mutateAsync({
      email: data.email,
      password: data.password,
    });
    console.log(result);
  };
  const dismissToast = () => setLoginMessage(null);
  const toastMarkup = loginMessage ? (
    <Toast
      content={loginMessage.message}
      error={loginMessage.loginFail}
      onDismiss={dismissToast}
    />
  ) : null;

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
                  rules={{
                    required: "Write your account email",
                    pattern:
                      /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  }}
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
                  rules={{
                    required: "Write your password",
                  }}
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

                {loginMessage?.loginFail && (
                  <Text as="p" tone="critical" alignment="center">
                    Login failed. Please check your details and try again.
                  </Text>
                )}
                <Button
                  variant="primary"
                  loading={login.isPending}
                  submit
                  fullWidth
                  size="large"
                >
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
      {toastMarkup}
    </div>
  );
};

export default SigninForm;
