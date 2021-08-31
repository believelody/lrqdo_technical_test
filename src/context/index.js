import React, { useContext, useState } from "react";

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    const [index, setIndex] = useState(1)
    const [elementId, setElementId] = useState("")
    return <AppContext.Provider value={{ search, setSearch, index, setIndex, elementId, setElementId }}>{children}</AppContext.Provider>
}

export const useContextApp = () => useContext(AppContext)