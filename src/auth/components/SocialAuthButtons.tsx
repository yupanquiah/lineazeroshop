"use client";

import { Button } from "@heroui/react";
import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react";

import { authWithGitHub, authWithGoogle } from "@/auth/services/auth";

export function SocialAuthButtons() {
  return (
    <section className="flex flex-col  gap-2">
      {" "}
      <Button className="w-full" variant="tertiary" onClick={authWithGoogle}>
        <IconBrandGoogleFilled />
        Iniciar sesión con Google
      </Button>
      <Button className="w-full" variant="tertiary" onClick={authWithGitHub}>
        <IconBrandGithub />
        Iniciar sesión con GitHub
      </Button>
    </section>
  );
}
