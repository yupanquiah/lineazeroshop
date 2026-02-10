import { AuthCard } from "@/auth/components/AuthCard";
import { RegisterForm } from "@/auth/components/RegisterForm";
import { AuthLayout } from "@/auth/layouts/AuthLayout";

export function Register() {
  return (
    <AuthLayout>
      <AuthCard
        title="Regístrate"
        question="¿Ya tienes una cuenta?"
        to="/login"
        toLabel="Inicia sesión"
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}
