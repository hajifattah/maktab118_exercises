import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  error?: string;
}
export const Input: React.FC<IInputProps> = ({label,name,error, ...props}) => {
  return (
    <div className="flex gap-x-4">
        <label htmlFor={label} className="w-24">{label} :</label>
      <input {...props} type="text" name={name} id={label} className="rounded-sm px-2 text-black"/>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};