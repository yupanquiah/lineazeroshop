import { useForm } from "@tanstack/react-form";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { ShowPassword } from "@/auth/components/ShowPassword";
import { SocialAuth } from "@/auth/components/SocialAuth";
import { authClient } from "@/auth/lib/auth-client";
import { signupSchema } from "@/auth/schemas/auth";
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

export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirm_password: "",
    },
    validators: {
      onSubmit: signupSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        await authClient.signUp.email({
          name: value.name,
          email: value.email,
          password: value.password,
          // callbackURL: "/dashboard",
          fetchOptions: {
            onSuccess: () => {
              toast.success("Registro exitoso");
              void navigate({ to: "/dashboard" });
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
      id="register-form"
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.Field
          name="name"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Nombre</FieldLabel>
                <Input
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
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
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
                  <InputGroupAddon align="inline-end" className="pr-0">
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
        <form.Field
          name="confirm_password"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>
                  Repite la contraseña
                </FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type={isVisible ? "text" : "password"}
                    placeholder="Confirma tu contraseña"
                  />

                  <InputGroupAddon align="inline-end" className="pr-0">
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

        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
          <FieldLabel htmlFor="terms-checkbox-basic">
            Acepto los términos y condiciones
          </FieldLabel>
        </Field>
        <Field>
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Spinner />
                Registrando...
              </>
            ) : (
              "Registrarse"
            )}
          </Button>
          <FieldSeparator className="my-2 *:data-[slot=field-separator-content]:bg-card [&>div]:h-px">
            O registrate con
          </FieldSeparator>
          <SocialAuth mode="signup" />
          <FieldDescription className="py-2.5 text-center">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
