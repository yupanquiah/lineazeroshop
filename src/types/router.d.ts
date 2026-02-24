import "@tanstack/react-router";

import type { AnyRouteMatch } from "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    breadcrumb?:
      | string
      | string[]
      | ((match: AnyRouteMatch) => string | string[]);
  }
}
