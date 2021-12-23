import { createContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({children})=>{
    const [theme,setTheme] = useState("dark");
    const values = {
        theme,
        setTheme,

    }
    return  <BookContext.Provider value={values} > {children}</BookContext.Provider>
}

export default BookContext;