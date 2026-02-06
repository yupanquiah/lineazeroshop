import { useForm } from "@tanstack/react-form";
import { useState } from "react";

import { ShowPassword } from "@/auth/components/ShowPassword";
import { SocialAuthButtons } from "@/auth/components/SocialAuthButtons";
import { registerFormSchema } from "@/auth/schemas/auth";
import { register } from "@/auth/services/auth";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Fieldset } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    validators: {
      onSubmit: registerFormSchema,
    },
    onSubmit: register,
  });

  return (
    <form
      id="register-form"
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
          name="name"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel>
                  Nombre
                  <Input
                    size="lg"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Juan"
                    autoComplete="off"
                    type="text"
                  />
                </FieldLabel>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
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
              <Field data-invalid={isInvalid}>
                <FieldLabel>
                  Password
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
          Registrase
        </Button>
      </Fieldset>
    </form>
  );
}
