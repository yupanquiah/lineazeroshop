import { AuthCard } from "@/auth/components/AuthCard";
import { RegisterForm } from "@/auth/components/RegisterForm";

export function Register() {
  return (
    <AuthCard title="Register" description="Create a new account">
      <RegisterForm />
    </AuthCard>
  );
}
