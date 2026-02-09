"use client";

import { Button } from "@heroui/react";
import { IconBrandGithub, IconBrandGoogleFilled } from "@tabler/icons-react";

import { authWithGitHub, authWithGoogle } from "@/auth/services/auth";

export function SocialAuthButtons() {
  return (
    <section className="flex flex-col gap-2">
      {" "}
      <Button variant="outline" onClick={authWithGoogle}>
        <IconBrandGoogleFilled />
        Iniciar sesión con Google
      </Button>
      <Button variant="outline" onClick={authWithGitHub}>
        <IconBrandGithub />
        Iniciar sesión con GitHub
      </Button>
    </section>
  );
}
