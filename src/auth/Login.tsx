import { AuthCard } from "@/auth/components/AuthCard";
import { LoginForm } from "@/auth/components/LoginForm";
import { AuthLayout } from "@/layouts/AuthLayout";

export function Login() {
  return (
    <AuthLayout>
      <AuthCard
        title="Iniciar sesión"
        question="¿No tienes una cuenta?"
        to="/register"
        toLabel="Regístrate"
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}
