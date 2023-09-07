import React from "react";
import { useState } from "react";
import { DataRouterStateContext } from "react-router/dist/lib/context";

export const ContextProvider = ({ children }) => {
      
        const [currenUser, setCurrentUser] = useState({});
        const [userToken, setUserToken] = useState(null);
      
        return (
                <StateContext.Provider value={{

                }}>
                        {children}
                </StateContext.Provider>
        )
}