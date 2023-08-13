import { render } from '@testing-library/react';
import GameDetails from '../Components/GameDetails';

test("renders gamedetails component", () => {
    const data = {
        description: "string",
    };
  render(
        <GameDetails data={data} />
  );
})