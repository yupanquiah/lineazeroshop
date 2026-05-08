import { cn } from "@/lib/utils";

export function CardSection({
  title,
  children,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"div"> & {
  title?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto -mt-2 flex w-full max-w-lg min-w-0 flex-col gap-1 self-stretch lg:max-w-none",
        containerClassName,
      )}
      {...props}
    >
      {title && (
        <h3 className="px-1.5 py-2 text-xs font-medium text-muted-foreground">
          {title}
        </h3>
      )}
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col items-start gap-6 border border-dashed bg-background p-4 text-foreground sm:p-6 *:[div:not([class*='w-'])]:w-full",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
