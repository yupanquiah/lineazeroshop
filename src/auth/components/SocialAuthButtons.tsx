import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react";

import { authWithGitHub, authWithGoogle } from "@/auth/services/auth";
import { Button } from "@/components/ui/button";

export function SocialAuthButtons() {
  return (
    <section className="flex flex-col space-y-3 space-x-3 md:flex-row">
      {" "}
      <Button
        size="lg"
        variant="outline"
        type="button"
        onClick={authWithGoogle}
      >
        <IconBrandGoogleFilled />
        Iniciar sesión con Google
      </Button>
      <Button
        size="lg"
        variant="outline"
        type="button"
        onClick={authWithGitHub}
      >
        <IconBrandGithub />
        Iniciar sesión con GitHub
      </Button>
    </section>
  );
}
