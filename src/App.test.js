import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
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

    const justLogSomething = (n) => {
        console.log(`Something! ${n}`);
        return n;
    };

    beforeEach(() => {
        fizzBuzzApp = shallow(<App calculate={justLogSomething} />);
    });

    it('whatever', () => {
        fizzBuzzApp.find('button').simulate('click');
    })
});

