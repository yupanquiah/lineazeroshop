import { ReactNode } from "react";

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps extends LoginProps {
  name: string;
}

export interface AuthLayoutProps {
  children?: ReactNode;
  name?: string;
  title?: string;
  description?: string;
}
