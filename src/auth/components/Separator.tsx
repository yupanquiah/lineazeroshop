import { Separator as Divider } from "@heroui/react";
export function Separator() {
  return (
    <div className="flex items-center gap-2 py-2">
      <Divider className="flex-1 bg-accent" />
      <p className="text-sm font-normal">O</p>
      <Divider className="flex-1 bg-accent" />
    </div>
  );
}
