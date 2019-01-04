# ReactJS Kata

This kata will build your skill with the following in the ReactJS framework:

* Toolchain installation and use including Yarn and Jest
* Creating a new ReactJS app
* Configuring the app for testing with Jest and Enzyme
* Unit Test Driven Development with Jest and Enzyme

## Instructions

When you complete this kata, you will know how to do the following:

* Set up your development environment
* Create a new ReactJS project
* Test drive Fizzbuzz logic using unit tests using Jest and Enzyme

You should be able to complete the kata from scratch, without Googling, in
forty five minutes or less.

### Setup Development Toolchain
[Install Homebrew](https://brew.sh/)

[Install Node.js with NVM](https://gist.github.com/d2s/372b5943bce17b964a79)

[Install yarn package management etc](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

### Create new ReactJS app
You can use npx which comes with npm, npm, or yarn to create a reactjs app.  The yarn method works 
perfectly fine.

[Brief React Installation Instructions](https://facebook.github.io/create-react-app/docs/getting-started)

* yarn create react-app reactjs-setup-kata
* cd reactjs-setup-kata/
* yarn eject

If at this point you run your tests with ```yarn test``` and you get a babel error, 
delete your node_modules and run ```yarn install```.

For this app, you can do all your work App.js.  It will be your single view in the app.

Notice that it is a class that extends Component and, like every Component, it has a render
method.  You can add other methods to it to retrieve data, do calculations, etc.

### Configurating for Unit Testing with Jest and Enzyme

To add Enzyme:

```
yarn add -D enzyme
yarn add -D enzyme-adapter-react-16"
```

create-react-app comes with some default Jest stuff but you'll probably want to do your own
so you can do Enzyme.  

[Setup React with Enzyme](https://airbnb.io/enzyme/docs/installation/)

You'll want to add a jestsetup.js file somewhere that looks like this:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';   
configure({ adapter: new Adapter() });
```

You'll have to modify the jest setup in package.json so it can find the setup file:

```
"jest": {
    ...
    "setupFiles": [
      "react-app-polyfill/jsdom",
      "<rootDir>/test/jestsetup.js"
    ],
```

### Unit Testing with Jest
[Testing React with Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html)

Note that, out of the box, yarn+watchman will watch for changes to your project and re-run
tests around changed code.  You can also instruct it to re-run all tests by type 'a' in
the terminal window where you ran 'yarn test.'

Also note that you will probably have to do 'npm run eject' to do custom configurations
of Jest, such as specifying a setup file to be run before tests.  It's not scary, though.
Just make sure to do a 'yarn install' afterward so it'll install the millions of 
dependencies you were getting for free before.

### Gherkins

* Given a user is on the Fizzbuzz form
* When she enters any number into an input box
* AND clicks the submit button
* Then the number is displayed

* Given a user is on the Fizzbuzz form
* When she enters 3 into an input box
* AND clicks the submit button
* Then the word Fizz is displayed

* Given a user is on the Fizzbuzz form
* When she enters 5 into an input box
* AND clicks the submit button
* The word Buzz is displayed

* Given a user is on the Fizzbuzz form
* When she enters the number that is a multiple of 3 into an input box
* AND clicks the submit button
* The word Fizz is displayed

* Given a user is on the Fizzbuzz form
* When she enters the number that is a multiple of 5 into an input box
* AND clicks the submit button
* The word Buzz is displayed

* Given a user is on the Fizzbuzz form
* When she enters the number 15 into an input box
* AND clicks the submit button
* The word Fizzbuzz is displayed

* Given a user is on the Fizzbuzz form
* When she enters the number that is a multiple of 15 into an input box
* AND clicks the submit button
* The word Fizzbuzz is displayed

### The Magical Wonder of FizzBuzz
FizzBuzz is a deceptively simple programming problem used by countless
IT recruiters to find out if candidates indeed have at least some of the
programming skills they claim.  You can implement it in almost any form
of computer language in no more than a couple minutes.  If you can provide
input to a function, display the output, and write a couple if-thens, you 
can complete FizzBuzz.

Here are the rules:
* Given an input integer
    * If the integer is divisible by 3, return or display Fizz
    * If it is divisible by 5, return or display Buzz
    * If it is divisible by both, return or display FizzBuzz
    * Otherwise, just return the display the input number
    
But wait!  Don't just fixate on a bunch of if-elseif-else stuff.  In interviews,
FizzBuzz can be an opportunity to show your technical depth.  How would you
thin slice this problem?  Is there more than one way?  How would you test
drive it?  What kinds of tests give you the best value?

And, for the implementation itself, what happens if you can't use if blocks?
Does the implementation language give you other structures you can use?
What happens if a number is divisible by both 3 and 5?  Is there any point
in checking for 3 and 5 individually?  

How could you write the code in an
OO style?  A functional style?  Could you write code that would do the
evaluation using only binary logic operators?  What if you need to evaluate
billions of numbers really fast in a stream?  How could you parallelize the
operation?  Does knowing the answer to one number make it easier to find
the answer for another?  What are the characteristics of your function?
Does it run in constant time?  Why or why not?

The point is that there's a wealth of opportunities to explore the whole of 
computer science, even with such a simple program.  So enjoy doing this
implementation and let it fill your mind with ideas.

