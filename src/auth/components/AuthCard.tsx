import { Link, LinkProps } from "@tanstack/react-router";
import { ReactNode } from "react";

import {
  Card,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  children?: ReactNode;
  title: string;
  question: string;
  to: LinkProps["to"];
  toLabel: string;
}

export function AuthCard({ children, title, question, to, toLabel }: Props) {
  return (
    <Card className="flex w-full flex-col">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardPanel>{children}</CardPanel>
      <CardFooter>
        <p className="w-full text-center text-sm text-muted-foreground">
          {question}{" "}
          <Link
            className="font-bold hover:text-foreground hover:underline"
            to={to}
          >
            {toLabel}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
