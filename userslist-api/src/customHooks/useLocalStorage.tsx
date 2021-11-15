import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)!) || initialValue
  );

  const save = (value: any) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
    
  };

  return [value, save];
}
