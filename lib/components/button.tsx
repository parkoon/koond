type ButtonProps = { children: React.ReactNode };

const Button = ({ children }: ButtonProps) => {
  return <button className="inline-flex border p-5 rounded">{children}</button>;
};

export default Button;
