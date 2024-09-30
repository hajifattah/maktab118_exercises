import { useState } from "react";

export default function Input({ placeHolder, type, validator , collectValue }: IData) {
  const [error, setError] = useState<string>("");
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(validator(e.target.value)) {
        setError(validator(e.target.value) as string) 
        collectValue("");
    }else {
    setError("");
    collectValue(e.target.value)
    }
  }

  return (
    <div>
      <input
        onChange={onChangeHandler}
        type={type}
        placeholder={placeHolder}
        className="w-full text-white px-3 py-1 bg-blueApp_1 rounded-md outline outline-2 focus:outline-green-400  "
      ></input>
      <p className={`text-sm font-bold bg-white/70 py-1 px-3 rounded-md w-fit text-red-500 mt-2 ${error ? "" : "hidden"}`}>
        {error}
      </p>
    </div>
  );
}