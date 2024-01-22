import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DialogContentProps
  extends React.ComponentProps<typeof Dialog.Content> {
  children: ReactNode;
  className?: string;
}

export default function DialogContent({
  children,
  className,
  ...props
}: DialogContentProps) {
  return (
    <Dialog.Content
      className={twMerge(
        "fixed shadow-dialog left-1/2 top-1/2 rounded-md -translate-y-1/2 bg-white -translate-x-1/2 p-8 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]",
        className
      )}
      {...props}
    >
      {children}
    </Dialog.Content>
  );
}
