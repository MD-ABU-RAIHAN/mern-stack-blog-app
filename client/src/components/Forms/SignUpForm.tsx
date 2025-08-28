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
import { trpc } from "../../utils/trpc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  // useState for Sign Up Failed Handle
  const [isSignUpFailed, setIsSignUpFailed] = useState(false);

  // useState for tost manage
  const [toast, setToast] = useState<{
    content: string;
    error?: boolean;
  } | null>(null);

  const dismissToast = () => setToast(null);

  const toastMarkup = toast ? (
    <Toast
      content={toast.content}
      error={toast.error}
      onDismiss={dismissToast}
    />
  ) : null;

  // useForm for manage form
  const {
    handleSubmit,
    control,
    formState: { errors, isLoading },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const postUser = trpc.user.postUser.useMutation({
    onSuccess: () => {
      setToast({ content: "Registration Successful 🎉", error: false });
      reset();
    },
    onError: (error) => {
      setIsSignUpFailed(true);
      setToast({ content: `${error.message} 🚫`, error: true });

      console.log(error.message);
    },
  });
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const res = await postUser.mutateAsync({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });
    console.log("Backend res >>", res);
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
            Welcome to Blog App
          </Text>
          <Text alignment="center" as="p" variant="bodyLg">
            Create your account and start blogging
          </Text>

          {/* Tab Content rendered Separately */}
          <div className="pt-4 px-4 pb-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormLayout>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{ required: "Full Name is required" }}
                  render={({ field }) => (
                    <TextField
                      type="text"
                      label="Full Name"
                      value={field.value}
                      error={errors?.fullName?.message}
                      onChange={field.onChange}
                      autoComplete="name"
                      placeholder="Enter your full name"
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
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
                  rules={{ required: "Password is required" }}
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
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    required: "Confirm Password is required",
                    validate: (value) => {
                      return (
                        value === watch("password") || "Passwords do not match"
                      );
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      type="password"
                      label="Confirm Password"
                      error={errors?.confirmPassword?.message}
                      value={field.value}
                      onChange={field.onChange}
                      autoComplete="off"
                      placeholder="Re write your password "
                    />
                  )}
                />

                {isSignUpFailed && (
                  <Text as="p" tone="critical" alignment="center">
                    Sign Up failed. Please check your details and try again.
                  </Text>
                )}

                <Button
                  variant="primary"
                  submit
                  fullWidth
                  loading={isLoading || postUser.isPending}
                  size="large"
                >
                  Sign Up
                </Button>
                <Text tone="subdued" alignment="center" as="p">
                  Already have an account?{" "}
                  <Button
                    onClick={() => navigate("/user/login")}
                    variant="plain"
                  >
                    Sign in
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

export default SignUpForm;
