import React, { useContext } from "react";
import { GreatContext} from "./A";

const D = () => {
  const useCon = useContext(GreatContext);

  return(
    <h1>Great: {useCon.great} && {useCon.great2}</h1>
  );
};

export default D;
