import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react";

import { authWithGitHub, authWithGoogle } from "@/auth/services/auth";
import { Button } from "@/components/ui/button";

export function SocialAuthButtons() {
  return (
    <div className="inline-grid space-y-3">
      <Button
        className="cursor-pointer"
        variant="outline"
        type="button"
        onClick={authWithGoogle}
      >
        <IconBrandGoogleFilled />
        Iniciar sesión con Google
      </Button>
      <Button
        className="cursor-pointer"
        variant="outline"
        type="button"
        onClick={authWithGitHub}
      >
        <IconBrandGithub />
        Iniciar sesión con GitHub
      </Button>
    </div>
  );
}
