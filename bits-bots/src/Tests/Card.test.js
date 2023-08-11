import { render, screen } from "@testing-library/react";
import Card from "../Components/Card";

describe("Card", () => {
    test("displays information correctly", () => {
        render(
            <Card />
        )
        screen.debug()
    })
})