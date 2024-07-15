import * as Progress from '@radix-ui/react-progress';
type StepBarProps = {
    items: string[];
    currentStep: number;
    startProgress?: number;
} & React.ComponentProps<typeof Progress.Root>;
declare const StepBar: ({ items, startProgress, currentStep, className, ...props }: StepBarProps) => import("react/jsx-runtime").JSX.Element;
export default StepBar;
