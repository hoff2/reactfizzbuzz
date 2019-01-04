import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import App from "./App";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has an input', () => {
  const fizzBuzzApp = shallow(<App />);
  expect(fizzBuzzApp.exists('input')).toBe(true);
});

it('has an input that can be typed in', () => {
    const fizzBuzzApp = render(<App />);
    const theInput = fizzBuzzApp.find('input').first();
    theInput.value = 'some text';
    expect(theInput.value).toBe('some text');
});

