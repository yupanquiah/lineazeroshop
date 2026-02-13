import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { ShowPassword } from "@/auth/components/ShowPassword";
import { SocialAuth } from "@/auth/components/SocialAuth";
import { loginFormSchema } from "@/auth/schemas/auth";
import { login } from "@/auth/services/auth";
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

export function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);

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
      <FieldGroup>
        <form.Field
          name="email"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field>
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
              <Field>
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
          <Button type="submit">Iniciar sesión</Button>
          <FieldSeparator className="my-2 *:data-[slot=field-separator-content]:bg-card [&>div]:h-px">
            O inicia sesión con
          </FieldSeparator>
          <SocialAuth />
          <FieldDescription className="py-2.5 text-center">
            ¿No tienes una cuenta? <Link to="/register">Registrate</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
