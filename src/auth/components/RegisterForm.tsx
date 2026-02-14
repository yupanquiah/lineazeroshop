import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { ShowPassword } from "@/auth/components/ShowPassword";
import { SocialAuth } from "@/auth/components/SocialAuth";
import { registerFormSchema } from "@/auth/schemas/auth";
import { register } from "@/auth/services/auth";
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

export function RegisterForm() {
  const [isVisible, setIsVisible] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirm_password: "",
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
      <FieldGroup>
        <form.Field
          name="name"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field>
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
              <Field>
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
              <Field>
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
          <Button type="submit">Registrase</Button>
          <FieldSeparator className="my-2 *:data-[slot=field-separator-content]:bg-card [&>div]:h-px">
            O registrate con
          </FieldSeparator>
          <SocialAuth />
          <FieldDescription className="py-2.5 text-center">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
