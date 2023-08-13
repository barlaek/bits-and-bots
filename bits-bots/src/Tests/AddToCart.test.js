import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddToCart from "../Components/AddToCart";

describe("AddToCart", () => {
    test("component renders correctly", () => {
        // const mockCallBack = jest.fn();
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
                    // onClick={mockCallBack}
                />
            </MemoryRouter>
        );
        // const onAdd = screen.getByRole("button");
        // fireEvent.click(onAdd);
        // expect(mockCallBack).toHaveBeenCalledTimes(1);
    })
})