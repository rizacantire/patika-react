import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "./Header";


describe("testing",()=>{
    test("Başlık testi",()=>{
        render(<Header />)
        const text = "Emoji Search";
        expect(screen.getByText(text)).toBeInTheDocument();
    
    })
})