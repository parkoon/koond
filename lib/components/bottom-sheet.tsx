"use client";

import React from "react";
import { Drawer } from "vaul";
import { cn } from "../utils/cn";

type BottomSheetProps = {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  onClose?(): void;
};

const BottomSheet = ({
  className,
  open,
  children,
  onClose,
}: BottomSheetProps) => {
  return (
    <Drawer.Root open={open} onClose={onClose} noBodyStyles>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/30" />
        <Drawer.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-50 mt-24 h-[96%] rounded-t bg-white px-4",
            className
          )}
        >
          <Drawer.Handle className="bg-black/10 mt-3 mb-6" />

          <div className="max-w-lg w-full mx-auto">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default BottomSheet;
