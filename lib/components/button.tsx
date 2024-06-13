type ButtonProps = { children: React.ReactNode };

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="inline-flex border py-2 px-4 text-sm rounded-full">
      {children}
    </button>
  );
};

export default Button;
