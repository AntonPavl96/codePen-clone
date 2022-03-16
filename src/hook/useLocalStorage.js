import { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsovValue = localStorage.getItem(prefixedKey);
    if (jsovValue != null) return JSON.parse(jsovValue);

    if (typeof initialValue == "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
