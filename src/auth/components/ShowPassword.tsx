import { Button, Tooltip } from "@heroui/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

interface ShowPasswordProps {
  onPress: () => void;
  isVisible: boolean;
}

export function ShowPassword({ onPress, isVisible }: ShowPasswordProps) {
  return (
    <Tooltip>
      <Button
        isIconOnly
        size="sm"
        variant="ghost"
        aria-label={isVisible ? "Hide password" : "Show password"}
        onPress={onPress}
      >
        {isVisible ? <IconEyeClosed /> : <IconEye />}
      </Button>

      <Tooltip.Content showArrow placement="top">
        <Tooltip.Arrow />
        <p>{isVisible ? "Hide password" : "Show password"}</p>
      </Tooltip.Content>
    </Tooltip>
  );
}
