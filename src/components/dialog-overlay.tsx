import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

interface DialogOverlayProps
  extends React.ComponentProps<typeof Dialog.Content> {
  className?: string;
}

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <Dialog.Overlay
      className={twMerge(
        "fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]",
        className
      )}
      {...props}
    />
  );
}
