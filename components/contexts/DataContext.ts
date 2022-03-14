import React, { createContext } from "react";

export const DataContext = React.createContext(
  {} as {
    mounted: boolean;
    setMounted: React.Dispatch<React.SetStateAction<boolean>>;
  }
);
