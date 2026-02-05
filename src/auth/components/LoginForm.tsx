import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { ShowPassword } from "@/auth/components/ShowPassword";
import { SocialAuthButtons } from "@/auth/components/SocialAuthButtons";
import { loginFormSchema } from "@/auth/schemas/auth";
import { login } from "@/auth/services/auth";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Fieldset } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginFormSchema,
    },
    onSubmit: login,
  });

  return (
    <form
      id="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
    >
      <Fieldset className="max-w-full">
        <SocialAuthButtons />
        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
          O continuar con
        </FieldSeparator>
        <form.Field
          name="email"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel>
                  Email
                  <Input
                    size="lg"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="m@example.com"
                    autoComplete="off"
                    type="email"
                  />
                </FieldLabel>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
        <form.Field
          name="password"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field>
                <FieldLabel>
                  <div className="flex w-full items-center">
                    <span>Password</span>
                    <Link
                      to="/auth/forgot-password"
                      className="ml-auto text-sm underline-offset-4 opacity-60 hover:underline hover:opacity-100"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      size="lg"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="••••••••••••"
                      type={showPassword ? "text" : "password"}
                    />
                    <ShowPassword
                      showPassword={showPassword}
                      onToggle={() => setShowPassword((current) => !current)}
                    />
                  </div>
                </FieldLabel>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
        <Button size="lg" type="submit">
          Login
        </Button>
      </Fieldset>
    </form>
  );
}
