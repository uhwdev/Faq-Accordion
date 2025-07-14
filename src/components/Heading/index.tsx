import "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1>{children}</h1>
      <a href="">{children}</a>
    </>
  );
}
