import { IconEye, IconEyeClosed } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

interface ShowPasswordProps {
  onToggle: () => void;
  showPassword: boolean;
}

export function ShowPassword({ onToggle, showPassword }: ShowPasswordProps) {
  return (
    <Tooltip>
      <div className="absolute top-0 right-1 bottom-0 flex h-full items-center justify-center">
        <TooltipTrigger
          render={
            <Button
              type="button"
              size="icon-xs"
              variant="ghost"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={onToggle}
            >
              {showPassword ? <IconEyeClosed /> : <IconEye />}
            </Button>
          }
        />
      </div>
      <TooltipPopup side="top">
        <p>{showPassword ? "Hide password" : "Show password"}</p>
      </TooltipPopup>
    </Tooltip>
  );
}
