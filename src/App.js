import React, {Component} from 'react';
import './App.css';

class App extends Component {
    calculate;

    constructor(props) {
        super(props);
        this.state = {};
        this.calculate = props.calculate;
        this.inputChanged = this.inputChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    inputChanged(event) {
        this.setState({ input: event.target.value });
    }

    buttonClicked() {
        this.setState({ output: this.calculate(this.state.input) });
    }

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.inputChanged}/>
                <button onClick={this.buttonClicked}>Click Me!</button>
                <div id="output">{this.state.output}</div>
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
