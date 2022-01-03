import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import App from "./App";
import ClipboardJS from "clipboard";

describe("Emoji List",()=>{
   
    let input,items;
    beforeEach(()=>{
      
        render(<App/>)
        input = document.querySelector('.search')
        items = screen.getAllByText("Click to copy emoji")
    })
    test("Emoji Loading...",()=>{
        render(<App />)
        const items = screen.getAllByText("Click to copy emoji");
        expect(items.length).toBeGreaterThan(0)
    })

    test('Searching... ', () => {    
    expect(input).not.toBeNull()
    userEvent.type(input,"coffee")
    
    expect(items.length>0).toBeTruthy()

  })

  test("Copying...",()=>{
 
    const clipboard = new ClipboardJS('.copy-to-clipboard');
    userEvent.click(items[2])
    const copyItem = clipboard.clipboardAction.text
 
    expect(copyItem).toBeInTheDocument
    
  })
})