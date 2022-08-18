import React, { createContext } from "react";
import Camp from "./utils/Camp";

const CampContext = createContext<{
    camps: Camp[];
    setCamps: React.Dispatch<React.SetStateAction<Camp[]>>;
} | null>(null);

export default CampContext;
