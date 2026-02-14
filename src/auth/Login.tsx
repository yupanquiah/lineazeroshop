import { AuthCard } from "@/auth/components/AuthCard";
import { LoginForm } from "@/auth/components/LoginForm";

export function Login() {
  return (
    <AuthCard
      title="Login"
      description="Enter your email below to login to your account"
    >
      <LoginForm />
    </AuthCard>
  );
}
