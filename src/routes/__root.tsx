import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "sileo";

import { NotFound } from "@/components/NotFound";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getThemeServerFn } from "@/lib/theme";
import appCss from "@/styles/global.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  beforeLoad: async () => ({ theme: await getThemeServerFn() }),
  shellComponent: RootDocument,
  notFoundComponent: () => <NotFound />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = Route.useRouteContext();

  return (
    <html lang="es" className={theme}>
      <head>
        <HeadContent />
      </head>
      <body>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
        <TanStackDevtools />
        <Scripts />
      </body>
    </html>
  );
}
