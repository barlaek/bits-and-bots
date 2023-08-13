import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Login from "../Components/Login"

describe("Login", () => {
    test("it submits data", () => {
        const onSubmit = jest.fn();
        const user = {
            email: "email",
            password: "password",
        } 
        render(
                <MemoryRouter>
                    <Login onSubmit={onSubmit(user)}/>
                </MemoryRouter>
        );
        const submit = screen.getByDisplayValue("Login");
        fireEvent.submit(submit);
        expect(onSubmit).toHaveBeenCalledTimes(1);
    })
})