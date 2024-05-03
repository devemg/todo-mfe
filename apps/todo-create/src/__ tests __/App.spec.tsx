import App from "../App"
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe('Todo Create App', () => { 
   
    it("Renders the main page", () => {
        render(<App />);
        expect(true).toBeTruthy();
    });

    it("should show error message when title is empty", async() => {
        render(<App />);
        const buttonElement = screen.getByRole("button");
        await userEvent.click(buttonElement);
        const error = screen.getByText('Title is required');
        expect(error).toBeDefined();
    });
 })