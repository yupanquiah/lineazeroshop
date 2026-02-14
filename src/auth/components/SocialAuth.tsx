import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react";

import { authClient } from "@/auth/lib/auth-client";
import { Button } from "@/components/ui/button";

interface Props {
  mode: "login" | "signup";
}

const authWithGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
};

const authWithGitHub = async () => {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
};

export function SocialAuth({ mode }: Props) {
  return (
    <section className="inline-grid space-y-3">
      <Button variant="outline" type="button" onClick={authWithGoogle}>
        <IconBrandGoogleFilled />
        {mode === "login"
          ? "Iniciar sesión con Google"
          : "Registrarse con Google"}
      </Button>
      <Button variant="outline" type="button" onClick={authWithGitHub}>
        <IconBrandGithub />
        {mode === "login"
          ? "Iniciar sesión con GitHub"
          : "Registrarse con GitHub"}
      </Button>
    </section>
  );
}
