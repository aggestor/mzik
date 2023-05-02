import { ChangeEventHandler, useState } from "react";
type SetDisplay = (key : keyof Record<string, string  | boolean>) => void;
export default function useToast(
  initialValues: Record<string, string  | boolean>
): [
  Record<string, string  | boolean>,
    () => void,
    SetDisplay?
  ] {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (): void => {
      setValues({
        ...values
      });
    }
  ];
}
