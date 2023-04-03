# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX from my understanding allows html syntax to function just like javascript. In order to use JSX we need to use curly braces.

Researched answer: JSX is an extnesion for javascript that lets us use html syntax in javascript code. JSX is usually used in react. In JSX we can use the html elements we are familiar with, like div, and h1 in Javascript. One of the benefits of using JSX is that with it we can write code that is easier to debug.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn is a package manager that collects all the necessary files we need to create a react app. It is also the command used in the terminal to run a test with jest. I'm not 100% sure what files are modified when we run yarn but i imagine it has something to do with the package files that show up in vscode after we reate a react app;

Researched answer:Yarn is an acronym that stands for yet another resource negotiator. It is a package manager that all the code snippets and dependencies necessary for our code. The filed yarn.lock, package.json, node_modules, .yarnc, and .yarn-integrity are all modified when we run yarn in the terminal. Thses are the most common files modified by yarn when ran in the terminal.

3. What is a React component?

Your answer: A react component is any element of a react app that is interactive on the webpage. For example, if we want to create a navigation bar that the user can click on to get directions, we will need to create a component in our text editor to store that logic.

Researched answer: A react Component is a reusable building block for user interface elements. Think of a component as a javascript function that returns a JSX element. Components are either functional components or class based components. Components let us create the UI so that it is easier to test and build.

4. What is the difference between state values and props in React?

Your answer: The difference between the two is that State values are data that tell us how the component will show up on the browser. Props are how you communicate between the components. Think of it this way, state is used to figure out what shows up on the screen while props are how you pass data between components.

Researched answer: Props is short for properties and they are ways to pass data from a parent component to its child component. From the child component you can acess the props and create a separate output. State values is the data inside the component. State values are declared using setState(). State is also what keeps track of the user input.

5. What is the DOM?

Your answer: DOM stands for document object model. It organizes html elements into a tree. I think of DOM as a visiual representation of HTML. I also think of DOM as a place to make changes before applying them to the web page.

Researched answer:DOM (document object model) shows the structure of an HTML document in a node tree. When we are looking at websites in our browser, we are looking at DOM. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A div tag is used in html to organize the code that we write. Similarly a span tag is used to do the same but with smaller sections of code.

Researched answer: A div tag is a type of element in html that is used as a container for other elements. div tags usually house headers and footers. div can also be used to apply thisng like classes and id's to larger blocks of code. A span tag is similar to div except it is used to style smaler blocks of code, like single words, or characters. To give an example, span can be used to style certain words in a paragraph, While div would be used to change the font of the entire paragraph.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Also referred to as OOP, object oriented programming is a method that was created to deal with large and complicated software systems. Developers needed a way to change small components withing without affecting the entire code. Often times when working with big projects, small changes can be hard to track, breaking it into small parts can be easier to find bugs.

2. Ruby:Ruby is an object oriented programming language that is designed to be easy to read and write. Ruby was created in the 90s and its strong focus on simplicity makes it a popular language. There are many built in methods in ruby and it is commonly used in the ruby on rails framework.

3. Implicit return: Ruby is a language that uses implicit returns, this basically means that if there is no specified return, the value of the last method used will be returned. Implicit returns can make code shorter, but I can see how it could make it harder to read.

4. Ruby blocks: A ruby block is a snippet of code that can be passed as an argument to a method. It is an anonymous function and it is usually defined with the key words do and end.

5. Ruby hashes: A ruby hash is a structure that lets us store data in key value pairs. It looks alot like an array but only you can use objects as keys insted of using integers to access elements of a hash.
