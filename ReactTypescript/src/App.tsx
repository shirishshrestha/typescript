import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

const App = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <Heading title="Hello World" />
      <Section title="Frontend">This is a section</Section>
      <Counter setCount={setCount}>count is {count}</Counter>
    </div>
  );
};

export default App;
