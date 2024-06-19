import clsx from "clsx";
import { MoveLeft } from "lucide-react";
import React from "react";

export const DEFAULT_SCREEN_HEADER_HEIGHT = 56;

type ScreenProps = {
  width?: number;
  children: React.ReactNode;
  className?: string;
};

const Screen = ({ className, children }: ScreenProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col flex-1 min-h-full w-full mx-auto max-w-lg",
        className
      )}
      style={{ boxShadow: "-1px 0 0 0 #eee, 1px 0 0 0 #eee" }}
    >
      <div className="px-5">{children}</div>
    </div>
  );
};

type ScreenHeaderProps = {
  action?: React.ReactNode;
  title?: string;
  extra?: React.ReactNode;
  bordered?: boolean;
  classNames?: {
    root?: string;
    title?: string;
  };
};
const ScreenHeader = ({
  title,
  extra,
  action,
  classNames,
  bordered = true,
}: ScreenHeaderProps) => {
  return (
    <header
      className={clsx(
        "flex justify-between items-center px-[20px]",
        bordered && "border-b",
        classNames?.root
      )}
      style={{ height: DEFAULT_SCREEN_HEADER_HEIGHT }}
    >
      {action}
      <h2
        className={clsx(
          "text-[16px] absolute left-1/2 -translate-x-1/2",
          classNames?.title
        )}
      >
        {title}
      </h2>
      {extra}
    </header>
  );
};

type ScreenBackProps = {
  onBack?(): void;
};
const ScreenBack = ({ onBack }: ScreenBackProps) => {
  const handleBack = () => {
    window.history.back();
    onBack?.();
  };
  return (
    <button onClick={handleBack}>
      <MoveLeft width={20} height={20} />
    </button>
  );
};

Screen.Header = ScreenHeader;
Screen.Back = ScreenBack;
export default Screen;
