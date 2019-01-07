import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import App, {calculateFizzBuzz} from "./App";

describe('fizzbuzz app', () => {

    let fizzBuzzApp;

    beforeEach(() => {
        fizzBuzzApp = shallow(<App />);
    });

    it('has a text input', () => {
        expect(fizzBuzzApp.exists('input[type="text"]')).toBe(true);
    });

    it('has a button', () => {
        expect(fizzBuzzApp.exists('button')).toBe(true);
    });

    it('has a div for results to show up in', () => {
        expect(fizzBuzzApp.exists('div#output')).toBe(true);
    });

});

describe('calculateFizzBuzz function', () => {
    it('returns 1 given 1', () => {
        expect(calculateFizzBuzz('1')).toBe('1');
    });

    it('returns 2 given 2', () => {
        expect(calculateFizzBuzz('2')).toBe('2');
    });

    it('returns fizz given multiples of 3', () => {
        expect(calculateFizzBuzz('3')).toBe('fizz');
        expect(calculateFizzBuzz('6')).toBe('fizz');
        expect(calculateFizzBuzz('33')).toBe('fizz');
    });

    it('returns buzz given multiples of 5', () => {
        expect(calculateFizzBuzz('5')).toBe('buzz');
        expect(calculateFizzBuzz('10')).toBe('buzz');
        expect(calculateFizzBuzz('55')).toBe('buzz');
    });

    it('returns fizzbuzz given multiples of 3 and 5', () => {
        expect(calculateFizzBuzz('15')).toBe('fizzbuzz');
        expect(calculateFizzBuzz('30')).toBe('fizzbuzz');
        expect(calculateFizzBuzz('165')).toBe('fizzbuzz');
    });
});

describe('fizzbuzz app with function', () => {
    let fizzBuzzApp;
    let spyFunction;

    beforeEach(() => {
        spyFunction = sinon.spy();
        fizzBuzzApp = shallow(<App calculate={spyFunction} />);
    });

    it('calls the provided function when the button is clicked', () => {
        fizzBuzzApp.find('button').simulate('click');
        expect(spyFunction.called).toBe(true);
    });

    it('passes the function what has been typed in to the input', () => {
        const inputValue = 'Hello';
        const input = fizzBuzzApp.find('input[type="text"]');
        input.simulate('change', { target: { value: inputValue }});
        fizzBuzzApp.find('button').simulate('click');
        expect(spyFunction.calledWith(inputValue)).toBe(true);
    });
});

describe('fizzbuzz app output', () => {
    it('shows the result of the provided function after the button is clicked', () => {
        const output = 'Hello';
        const outputFunction = () => { return output; };
        const fizzBuzzApp = shallow(<App calculate={outputFunction} />);
        fizzBuzzApp.find('button').simulate('click');
        expect(fizzBuzzApp.find('div#output').text()).toBe(output);
    });
});

describe('integration test: fizzbuzz', () => {

    function checkFizzBuzzInteraction(inputValue, expectedOutput) {
        const fizzBuzzApp = shallow(<App calculate={calculateFizzBuzz} />);
        const input = fizzBuzzApp.find('input[type="text"]');
        input.simulate('change', { target: { value: inputValue }});
        fizzBuzzApp.find('button').simulate('click');
        expect(fizzBuzzApp.find('div#output').text()).toBe(expectedOutput);
    }

    it('displays the fizzbuzz of the number entered', () => {
        checkFizzBuzzInteraction('3', 'fizz');
        checkFizzBuzzInteraction('25', 'buzz');
        checkFizzBuzzInteraction('75', 'fizzbuzz');
    });
})
