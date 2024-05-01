import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <Heading title="Hello World" />
      <Section title="Frontend">This is a section</Section>
      <Counter setCount={setCount}>count is {count}</Counter>
      <List
        items={["coffee", "tacos", "code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </div>
  );
};

export default App;
