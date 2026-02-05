import { LoginProps, RegisterProps } from "@/auth/types";
import { toastManager } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";

export const authWithGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
};

export const authWithGitHub = async () => {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
};

export const login = async ({ value }: { value: LoginProps }) => {
  await authClient.signIn.email(
    {
      email: value.email,
      password: value.password,
      callbackURL: "/dashboard",
    },
    {
      onSuccess: () => {
        toastManager.add({
          title: "Login successful",
          description: "You have been logged in successfully.",
          type: "success",
        });
      },
      onError: (ctx) => {
        toastManager.add({
          title: "Login failed",
          description: ctx.error.message,
          type: "error",
        });
      },
    },
  );
};

export const register = async ({ value }: { value: RegisterProps }) => {
  await authClient.signUp.email(
    {
      email: value.email,
      password: value.password,
      name: value.name,
      callbackURL: "/dashboard",
    },
    {
      onSuccess: () => {
        toastManager.add({
          title: "Signup successful",
          description: "Your account has been created successfully.",
          type: "success",
        });
      },
      onError: (ctx) => {
        toastManager.add({
          title: "Register faild",
          description: ctx.error.message,
          type: "error",
        });
      },
    },
  );
};
