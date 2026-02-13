import { AuthCard } from "@/auth/components/AuthCard";
import { RegisterForm } from "@/auth/components/RegisterForm";
import { AuthLayout } from "@/auth/layouts/AuthLayout";

export function Register() {
  return (
    <AuthLayout>
      <AuthCard>
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}
