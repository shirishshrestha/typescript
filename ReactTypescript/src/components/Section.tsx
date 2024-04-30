import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ children, title = "My subheading" }: SectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Section;
