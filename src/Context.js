import { createContext } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    return (
        <ApiContext value={"Balbir"}>
            { children }
        </ApiContext>
    );
};

export { ApiContext, ApiProvider };