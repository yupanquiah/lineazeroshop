import { IconEye, IconEyeClosed } from "@tabler/icons-react";

import { InputGroupButton } from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ShowPasswordProps {
  onClick: () => void;
  isVisible: boolean;
}

export function ShowPassword({ onClick, isVisible }: ShowPasswordProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <InputGroupButton
          variant="ghost"
          size="icon-sm"
          aria-label={isVisible ? "Hide password" : "Show password"}
          onClick={onClick}
        >
          {isVisible ? <IconEyeClosed /> : <IconEye />}
        </InputGroupButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isVisible ? "Hide password" : "Show password"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
