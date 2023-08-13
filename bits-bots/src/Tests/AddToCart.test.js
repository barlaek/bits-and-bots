import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddToCart from "../Components/AddToCart";

describe("AddToCart", () => {
    test("component renders correctly", () => {
        // const mockCallBack = jest.fn();
        // const mockOnAddFn = jest.fn()
        // const mockDispatch = ({
        //     type: "addProduct",
        //     payload: {
        //         data: "data",
        //     }
        // })
        // const onAdd = jest.fn(() => {mockOnAddFn(mockDispatch)});
        const data = {
            name: "name",
            prices: {
                price: "price",
            },
        };
        render(
            <MemoryRouter>
                <AddToCart 
                    data={data}
                    // mockCallBack={mockCallBack(onAdd)}
                />
            </MemoryRouter>
        );
        // const button = screen.getByRole("button");
        // fireEvent.click(button);
        // expect(mockCallBack).toHaveBeenCalledTimes(1);
    })
})