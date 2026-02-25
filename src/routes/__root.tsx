import { TanStackDevtools } from "@tanstack/react-devtools";
import { FormDevtoolsPanel } from "@tanstack/react-form-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Toaster } from "sileo";

import { NotFound } from "@/components/NotFound";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  shellComponent: RootDocument,
  notFoundComponent: () => <NotFound />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
          <TanStackDevtools
            plugins={[
              {
                name: "TanStack Router",
                render: <TanStackRouterDevtoolsPanel />,
                defaultOpen: true,
              },
              {
                name: "TanStack Form",
                render: <FormDevtoolsPanel />,
                defaultOpen: true,
              },
            ]}
          />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
