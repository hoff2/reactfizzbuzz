import React, {Component} from 'react';
import './App.css';

class App extends Component {
    calculate;

    constructor(props) {
        super(props);
        this.calculate = props.calculate;
    }

    render() {
        return (
            <div className="App">
                <input type="text" />
                <button onClick={this.calculate}>Click Me!</button>
                <div id="output" />
            </div>
        );
    }
}

export function calculateFizzBuzz(n) {
    if(n % 15 === 0) {
        return 'fizzbuzz';
    }
    if(n % 3 === 0) {
        return 'fizz';
    }
    if (n % 5 === 0) {
        return 'buzz';
    }
    return n;
}

export default App;
