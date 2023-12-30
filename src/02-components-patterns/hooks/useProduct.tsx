import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  value = 0,
  onChange,
  product,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  console.log(initialValues?.count);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    newValue = initialValues?.maxCount
      ? Math.min(newValue, initialValues.maxCount)
      : newValue;
    setCounter(newValue);
    onChange?.({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    } else {
      isMounted.current = true;
    }

    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: Boolean(
      initialValues?.count && initialValues.maxCount === counter
    ),
    reset,
  };
};

export default useProduct;
