import React, { createContext } from "react";
import B from "./B";

const GreatContext = createContext();

const A = () => {
  const great = "Hello from component A";
  const great2 = "Hiii from component A";

  return (
    <div>
      <GreatContext.Provider value={{great,great2}}>
          <B />
      </GreatContext.Provider>
    </div>
  );
};

export default A;
export { GreatContext};
