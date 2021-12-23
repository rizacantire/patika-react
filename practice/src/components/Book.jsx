import {BookProvider} from "./BookContext";
import BookDetail from "./BookDetail";
import Header from "./Header";

export default function Book(){
    
    return(
        <div>
            <BookProvider> 
                <Header/>
                <BookDetail>
                    Çocuklarımmmm
                </BookDetail>
            </BookProvider>
        </div>
    )
}