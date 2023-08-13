import { fireEvent, render } from '@testing-library/react';
import GameDetails from '../Components/GameDetails';

test("renders gamedetails component", () => {
    const details = [{
        id: 200,
        name: "string",
        description: "string",
        images: [{
            id: 201,
            name: "string",
            src: "url",
        }]
    }]
  render(
        <GameDetails details={details} />
  );
})