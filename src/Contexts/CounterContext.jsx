import { createContext, useState } from "react";

export const counterContext = createContext(0); //bstkhdmha 34an akhly el data shared f el project kolo

export default function CounterContextProvider( {children} ) {
  const [counter, setCounter] = useState(10);
  // ya3ny el provider da mohmeto ano yb3t el data deh ely hya {counter , setCounter} l2y component
  // {hambozo: counter} >>>> deh ya3ny hb3tlk haga esmha hambozo mt5zn gwaha haga esmha counter
  // aw {counter: counter} >> deh ya3ny hb3tlk haga esmha counter mt5zn gwaha haga esmha counter f el 7ala deh
  // tkhleha keda {counter} 34an el key hwa hwa el value
  return (
    <counterContext.Provider
      value={{ counter, setCounter }}
    >
        {children}
    </counterContext.Provider>
  );
}
