/* eslint-disable testing-library/prefer-presence-queries */

import {render,screen} from '@testing-library/react';
import Login from '../Login';

test('checking component loader',()=>{
    //steps for test
    render(<Login />);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
})
test('checking email & password inputs are empty',()=>{
    //steps for test
    render(<Login />);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");



})