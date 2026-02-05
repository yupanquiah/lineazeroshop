import { AuthLayout } from "@/layouts/AuthLayout";

import { AuthCard } from "./components/AuthCard";
import { RegisterForm } from "./components/RegisterForm";

export function Register() {
  return (
    <AuthLayout>
      <AuthCard
        title="Regístrate"
        question="¿Ya tienes una cuenta?"
        to="/login"
        toLabel="Iniciar sesión"
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}
