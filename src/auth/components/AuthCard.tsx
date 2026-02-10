import { Card } from "@heroui/react";
import { Link } from "@tanstack/react-router";

import { AuthCardProps } from "../types";

export function AuthCard({
  children,
  title,
  question,
  to,
  toLabel,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-sm bg-surface/60 px-8 pt-6 pb-10 backdrop-blur-md backdrop-saturate-150">
      <Card.Header>
        <Card.Title className="pb-2 text-xl font-medium">{title}</Card.Title>
        {/*    <Card.Description className="text-small text-default-500">
          to continue to Acme
        </Card.Description> */}
      </Card.Header>
      <Card.Content>{children}</Card.Content>
      <Card.Footer>
        <p className="w-full px-1 pt-2 text-center text-sm text-muted">
          {question}{" "}
          <Link
            className=" font-bold text-accent hover:text-accent-hover hover:underline"
            to={to}
          >
            {toLabel}
          </Link>
        </p>
      </Card.Footer>
    </Card>
  );
}
