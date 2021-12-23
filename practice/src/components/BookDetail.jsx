import { useContext } from "react"
import BookContext from "./BookContext";


export default function BookDetail({children}){
    const {theme,setTheme} = useContext(BookContext);

    const themeChange =()=>{
        setTheme(theme ==="dark" ?"selam":"dark")
        
        console.log("tiklandı");
    } 
    console.log(theme)
    return(
        <div>
            Ktiap detay data = {theme}
            <button onClick={themeChange}>tikla</button>
        </div>
    )
}