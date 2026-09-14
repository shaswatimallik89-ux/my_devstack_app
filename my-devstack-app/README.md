DevStack

 About the Project

DevStack is a simple web application that helps developers explore different technologies and create their own development stack.Users can browse different technologies, add the technologies they want to use, and manage their selected stack.
The project was built to practice React, Tailwind CSS, components, state, props, and loading data from a JSON file.

 Technologies Used

1. React
2. JavaScript
3. JSX
4. Tailwind CSS
5. Vite
6. HTML
7. CSS
8. JSON

Features

1. Explore Technologies

Users can view different development technologies and learn what they can use for their projects.

 2. Build Your Stack

Users can add technologies to their own stack and create a development stack based on their needs.

3. Manage Your Stack

Users can remove individual technologies or clear all the selected technologies from their stack.

---

React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. React uses JSX because it makes creating and understanding the website UI easier.

2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.

State is data that belongs to a component and can change when the user interacts with the website.

3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us store and change data in a React component.

I used it in this project to store the selected technologies in the user's stack.

For example, when a user adds a technology, the state is updated and the screen changes automatically.

 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run some code after the component loads or when something changes.

I used it to load the technology data from the `technologies.json` file when the website starts.

 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed.

 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a certain condition is true.

I used it for the empty stack message. If the user has not added any technology, the website shows a message saying that the stack is empty.

For example:

```jsx
{stack.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

A child can send information back by calling a function that the parent passes to it as a prop.

For example, the parent can pass an `onAdd` function to a technology card. When the user clicks the Add button, the child calls that function and the parent updates the stack.

---

 Author

**Shaswati Mallik**

Built as a React learning project.
