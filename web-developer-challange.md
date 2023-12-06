### Challenge

Objective: The objective of this challenge is not necessarily just to solve the problem - but to
evaluate your software development skills, code quality, creativity, and resourcefulness as a
potential future colleague. Please share the necessary artifacts you would provide to your
colleagues in a real-world professional setting.

We have a simple API that returns a JSON array. We would like you to use HTML, CSS and
Javascript to read the API and display it in an organized way. In addition, you should add in
some sort of sorting mechanic to the front-end. Use preferably Vue.js as base and feel free to
add any other framework or library you would consider necessary to achieve the task.
https://swapi.dev/documentation
Feel free to use any data - but perhaps you can use the “planet” resource here.
There is no right answer - just looking for an understanding of how you interpret the assignment
and what decisions you make to build a simple project.
After finishing your code answer the following questions:

1. What's a closure? Where in the code is there a closure?
2. Which are the potential side-effects in any function? Could you point out any of these cases in
   your code? Are they expected? Can they be avoided?

### Answers

### What's a closure? Where in the code is there a closure?

A closure is a function that has access to variables from its lexical scope, even after that scope has finished executing. Closures allow a function to "remember" the environment in which it was created.

In the given code, the handleSortByName in the component Planets function is a closure. It is defined within the lexical scope of the App component, and it captures the sortedPlanets variable from its outer scope.

### Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

Potential side effects in functions usually involve modifying external state or interacting with external systems. In the provided code:

The handleSortByName in the component Planets function modifies the state (sortedPlanets) using setSortedPlanets. This is a side effect as it changes the state outside the function scope.

The useEffect hook in the App component has a side effect by updating the state (setSortedPlanets(planets)) when the planets prop changes.

These side effects are expected in this context, as the code is dealing with asynchronous data fetching and state management. They are necessary for the functionality of the application.

To avoid unexpected side effects, it's crucial to understand and manage state changes carefully. In this code, the use of React hooks (useState, useEffect, and useCallback) helps in organizing and controlling side effects in a predictable manner. However, as the application grows, it's essential to be mindful of potential side effects and manage state changes efficiently.
