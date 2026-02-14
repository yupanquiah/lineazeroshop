import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { ShowPassword } from "@/auth/components/ShowPassword";
import { SocialAuth } from "@/auth/components/SocialAuth";
import { authClient } from "@/auth/lib/auth-client";
import { loginSchema } from "@/auth/schemas/auth";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        await authClient.signIn.email({
          email: value.email,
          password: value.password,
          //callbackURL: '/dashboard',
          fetchOptions: {
            onSuccess: () => {
              toast.success("Logged in successfully");
              void navigate({
                to: "/dashboard",
              });
            },
            onError: ({ error }) => {
              toast.error(error.message);
            },
          },
        });
      });
    },
  });

  return (
    <form
      id="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.Field
          name="email"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="off"
                />
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
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type={isVisible ? "text" : "password"}
                    placeholder="Ingrese tu contraseña"
                  />
                  <InputGroupAddon align="inline-end">
                    <ShowPassword
                      isVisible={isVisible}
                      onClick={() => setIsVisible(!isVisible)}
                    />
                  </InputGroupAddon>
                </InputGroup>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
        <div className="flex justify-between">
          <Field orientation="horizontal">
            <Checkbox id="remember" name="remember" />
            <FieldLabel htmlFor="remember">Recordarme</FieldLabel>
          </Field>
          <FieldDescription>
            <Link to="/forgot-password" className="text-sm text-nowrap">
              ¿Olvidaste tu contraseña?
            </Link>
          </FieldDescription>
        </div>
        <Field>
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Spinner />
                Iniciando...
              </>
            ) : (
              "Login"
            )}
          </Button>
          <FieldSeparator className="my-2 *:data-[slot=field-separator-content]:bg-card [&>div]:h-px">
            O inicia sesión con
          </FieldSeparator>
          <SocialAuth mode="login" />
          <FieldDescription className="py-2.5 text-center">
            ¿No tienes una cuenta? <Link to="/signup">Registrate</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
