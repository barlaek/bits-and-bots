import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../Components/Register";

describe("Register", () => {
    test("stores user to localStorage", () => {
        const mockCallback = jest.fn();
        render(
            <Register onSubmit={mockCallback} />,
        )
        const input = screen.getByRole("input");
        fireEvent.submit(input);
        expect(mockCallback).toHaveBeenCalledTimes(1);
    })
})