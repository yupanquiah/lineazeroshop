import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { useTransition } from "react";
import { toast } from "sonner";
import z from "zod";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { CardSection } from "../components/CardSection";

export function CompanySettings() {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      company: "",
      branch: "",
      email: "",
    },
    validators: {
      onSubmit: z.object({
        company: z
          .string()
          .min(2, "Company name must be at least 2 characters"),
        branch: z.string().min(2, "Branch name must be at least 2 characters"),
        email: z.email("Invalid email address"),
      }),
    },
    onSubmit: async () => {
      startTransition(async () => {
        // Simulate an API call to update company settings
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Company settings updated successfully");
        void navigate({
          to: "/dashboard",
        });
      });
    },
  });
  return (
    <form
      className="flex flex-col gap-4 md:gap-6 "
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
    >
      <section className="mx-auto grid w-full min-w-0 content-center items-start gap-8 sm:gap-12 md:grid-cols-2 md:gap-8 2xl:max-w-6xl">
        <CardSection title="Sube tu logotipo">
          <label
            htmlFor="logo"
            className="group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/40 px-6 py-14 text-center transition hover:border-primary hover:bg-muted/80"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm transition group-hover:scale-105">
              <span className="text-2xl text-muted-foreground group-hover:text-primary">
                +
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium">
                Haz clic para subir tu logotipo
              </p>
              <p className="text-xs text-muted-foreground">
                Debe ser un archivo JPG o PNG
              </p>
            </div>

            <input
              id="logo"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
            />
          </label>
        </CardSection>

        <CardSection title="Color">ss</CardSection>
      </section>
      <section className="flex flex-col gap-4 md:flex-row md:gap-6">
        <FieldGroup>
          <form.Field
            name="company"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Company Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    placeholder="Company name"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
          <form.Field
            name="branch"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Branch Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    placeholder="Branch name"
                    autoComplete="off"
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
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="email"
                    placeholder="Email address"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>
        <FieldGroup>
          <form.Field
            name="company"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Company Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    placeholder="Company name"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
          <form.Field
            name="branch"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Branch Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    placeholder="Branch name"
                    autoComplete="off"
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
                    aria-invalid={isInvalid}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="email"
                    placeholder="Email address"
                    autoComplete="off"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>
      </section>
    </form>
  );
}
