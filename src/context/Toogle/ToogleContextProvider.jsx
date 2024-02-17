/* eslint-disable react/prop-types */
import { useState } from "react";
import toogleContext from "./toogleContext";

export default function ToogleContextProvider({ children }) {
  const [clicked, setClicked] = useState(false);
  return (
    <toogleContext.Provider value={{ clicked, setClicked }}>
      {children}
    </toogleContext.Provider>
  );
}
