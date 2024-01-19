import { useCallback, useState } from "react";
import Button from "./Component/Button";
import Title from "./Component/Title";
import Count from "./Component/Count";

export default function Hooks_useCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(10000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);
  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handlerClick={incrementAge} text="Increse Age" />
      <Count text="Salary" count={salary} />
      <Button handlerClick={incrementSalary} text="Increse Salary" />
    </>
  );
}
