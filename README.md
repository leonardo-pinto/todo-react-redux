# To Do List

## Description

<p> The project consists of a simple todo list application to practice front-end skills. </p>
<p> The application was developed using React, and the app's state was managed using Redux. </p>
<p> Responsive layout and styles were applied using Tailwind CSS.</p>
<p> Unit and integrations tests were developed using Jest and React Testing Library. </p>

![To Do List example](src/images/todo-example.png?raw=true)

## Application Deploy with Vercel

* <a href="https://todo-react-redux-murex.vercel.app/">To-Do List</a>


### Features

* Add todo
* Delete todo
* Mark todo as completed
* Edit todo
* Mobile first

### Technologies

* <a href="https://reactjs.org/">React</a>
* <a href="https://redux.js.org/">Redux</a>
* <a href="https://tailwindcss.com/">Tailwind CSS</a>
* <a href="https://jestjs.io/">Jest</a>
* <a href="https://testing-library.com/">React Testing Library</a>

## Getting Started

### Prerequisites

<p>Before getting started, you need to have NodeJS installed </p>

* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Instalation

1. Clone the repository

- `git clone git@github.com:leonardo-pinto/todo-react-redux.git`.

Enter in the created directory:
  - `cd todo-react-redux`

2. Install the required dependencies

- `npm install`

3. Start running the application !

- `npm start`


### Running tests

Type the following command in the terminal:

- `npm run test`

After this, the following message should appear in the terminal:

```$
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

Press 'a' key to run all tests!

### Tests coverage

To verify tests coverage, type the following command in the terminal:

- `npm run test-coverage`

The following message should appear in the terminal:

```
--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------|---------|----------|---------|---------|-------------------
All files                 |     100 |      100 |     100 |     100 |                   
 src                      |     100 |      100 |     100 |     100 |                   
  App.jsx                 |     100 |      100 |     100 |     100 |                   
 src/components/header    |     100 |      100 |     100 |     100 |                   
  Header.jsx              |     100 |      100 |     100 |     100 |                   
 src/components/icons     |     100 |      100 |     100 |     100 |                   
  icons.jsx               |     100 |      100 |     100 |     100 |                   
 src/components/input     |     100 |      100 |     100 |     100 |                   
  TodoInput.jsx           |     100 |      100 |     100 |     100 |                   
 src/components/listTodos |     100 |      100 |     100 |     100 |                   
  ListTodos.jsx           |     100 |      100 |     100 |     100 |                   
 src/redux                |     100 |      100 |     100 |     100 |                   
  store.jsx               |     100 |      100 |     100 |     100 |                   
 src/redux/reducers       |     100 |      100 |     100 |     100 |                   
  todoReducer.js          |     100 |      100 |     100 |     100 |                   
 src/utils                |     100 |      100 |     100 |     100 |                   
  renderWithRedux.jsx     |     100 |      100 |     100 |     100 |                   
--------------------------|---------|----------|---------|---------|-------------------
```

# Author

Leonardo Pinto

https://www.linkedin.com/in/leonardo-antonio-pinto/
