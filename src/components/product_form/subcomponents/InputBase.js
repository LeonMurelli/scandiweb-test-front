import { FormItem } from "./styles";

export default function InputBase({
  children,
  label,
}) {

  return (
    <FormItem>
      <label>{label}</label>
      {children}
    </FormItem>
  );
}
