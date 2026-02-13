import z from "zod";

export const loginFormSchema = z.object({
  email: z.email(
    "Por favor, introduce una dirección de correo electrónico válida.",
  ),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres."),
});

export const registerFormSchema = z
  .object({
    name: z.string().min(1, "Por favor, introduce un nombre."),
    email: z.email(
      "Por favor, introduce una dirección de correo electrónico válida.",
    ),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirm_password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Las contraseñas no coinciden.",
    path: ["confirm_password"],
  });
