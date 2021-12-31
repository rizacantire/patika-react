import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";

describe("Emoji List",()=>{
    let input;
    beforeEach(()=>{
        render(<App/>)
    })
    test("Emoji Loading...",()=>{
        render(<App />)
        const items = screen.getAllByText("Click to copy emoji");
        expect(items.length).toBeGreaterThan(0)
     
    })

    test("Emoji Searching",()=>{
        let d =document.querySelector(".component-search-input")
        screen.queryAllBy(".component-search-input")
        console.log(d.innerHTML);
        
    })
})