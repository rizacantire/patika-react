import { useContext } from "react"
import BookContext from "./BookContext";


export default function Header(){
    const {theme,setTheme} = useContext(BookContext);

    
    console.log("header : ",theme)
    return(
        <div>
            Header = {theme}
       
        </div>
    )
}