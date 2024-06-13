"use client";
import { X } from "lucide-react";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Drawer } from "vaul";
import { cn } from "../utils/cn";

type ScreenDrawerProps = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
};

type ScreenDrawerProviderProps = {
  children: React.ReactNode;
};

type ScreenDrawerContextType = {
  opened: boolean;
  open: () => void;
  close: () => void;
};
const ScreenDrawerContext = createContext<ScreenDrawerContextType | undefined>(
  undefined
);
export const ScreenDrawerProvider = ({
  children,
}: ScreenDrawerProviderProps) => {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);

    window.history.pushState({ opened: Date.now().toString() }, "");
  };

  const close = () => {
    window.history.back();
  };

  useEffect(() => {
    const handlePopState = () => {
      setOpened(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <ScreenDrawerContext.Provider value={{ opened, open, close }}>
      {children}
    </ScreenDrawerContext.Provider>
  );
};

export const useScreenDrawer = () => {
  const context = useContext(ScreenDrawerContext);

  if (!context) {
    throw new Error(
      "useScreenDrawer must be used within a ScreenDrawerProvider"
    );
  }

  return context;
};
const ScreenDrawer = ({ className, title, children }: ScreenDrawerProps) => {
  const { opened, close } = useScreenDrawer();

  return (
    <Drawer.Root
      dismissible={false}
      open={opened}
      noBodyStyles
      direction="right"
    >
      <Drawer.Portal>
        <Drawer.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-50 mt-6 h-full bg-white px-4",
            className
          )}
        >
          <div className="flex justify-between py-4">
            <div />
            <h2 className="text-lg">{title}</h2>
            <button onClick={close}>
              <X width={20} height={20} />
            </button>
          </div>
          <div className="max-w-[44rem] w-full mx-auto">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ScreenDrawer;
