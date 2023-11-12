import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

const useProduct = ({ value = 0, onChange, product }: useProductArgs) => {
  const [counter, setCounter] = useState(0);

  const isControlled = useRef(Boolean(onChange));
  console.log(isControlled);

  const increaseBy = (value: number) => {

    if(isControlled.current){
      return onChange?.({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange?.({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};

export default useProduct;
