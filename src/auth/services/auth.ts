import { toast } from "sonner";

import { authClient } from "@/auth/lib/auth-client";
import { LoginProps, RegisterProps } from "@/auth/types/index";

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
        toast.success("Inicio de sesión exitoso");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message);
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
        toast.success("Registro exitoso");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message);
      },
    },
  );
};
