import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from '../Components/Register';
import { UserContext } from '../Utilities/Context/UserContext';

describe('Register', () => {
  test('it submits data', () => {
    // const onSubmit = jest.fn();
    // const user = {
    //     email: "email",
    //     password: "password",
    // }
    render();
    // <UserContext>
    // <MemoryRouter>
    //     {/* <Register onSubmit={onSubmit(user)}/> */}
    //     <Register />
    // </MemoryRouter>
    // {/* </UserContext> */}
    // const submit = screen.getByDisplayValue("Register account");
    // fireEvent.submit(submit);
    // expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
