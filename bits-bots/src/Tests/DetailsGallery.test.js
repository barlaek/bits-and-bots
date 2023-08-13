import { fireEvent, render, screen } from "@testing-library/react";
import DetailsGallery from "../Components/DetailsGallery";

describe("Details gallery", () => {
    test("it renders correctly", () => {
        const gallery = [{
            alt: "alt",
            id: 200,
            name: "name",
            src: "url",
            srcset: "url",
            thumbnail: "url",
        }];

        render(
            <DetailsGallery 
                gallery={gallery}
            />
        );
    })
})