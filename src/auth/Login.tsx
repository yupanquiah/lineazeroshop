import { AuthCard } from "@/auth/components/AuthCard";
import { LoginForm } from "@/auth/components/LoginForm";
import { AuthLayout } from "@/auth/layouts/AuthLayout";

export function Login() {
  return (
    <AuthLayout>
      <AuthCard>
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}
