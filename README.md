📌 Counter App — React + Redux + Tailwind CSS
📝 Project Overview

This Counter App is a simple yet powerful example of managing application state using Redux in a React environment, styled with Tailwind CSS for a modern, responsive UI.
It demonstrates how to use Redux for centralized state management, enabling predictable state transitions and easy debugging.

The app provides three main buttons:

➕ Increment (+) — Increases the counter by 1.

➖ Decrement (-) — Decreases the counter by 1.

🔄 Reset — Resets the counter back to 0.

🎯 Features

Global State Management with Redux.

Functional Components with React Hooks.

Tailwind CSS Styling for sleek and responsive design.

Three Core Actions: Increment, Decrement, Reset.

Clean, beginner-friendly code structure for learning and extension.

🛠️ Tech Stack

React — Component-based UI library.

Redux — State management library.

React-Redux — Official bindings between React and Redux.

Tailwind CSS — Utility-first CSS framework for styling.

📂 Folder Structure
counter-app/
│
├── src/
│   ├── app/
│   │   └── store.js           # Redux store configuration
│   │
│   ├── features/
│   │   └── counter/
│   │       ├── counterSlice.js # Redux slice with state & reducers
│   │
│   ├── components/
│   │   └── Counter.js         # Main Counter component with UI
│   │
│   ├── App.js                 # Root component
│   ├── index.js               # App entry point
│   └── index.css              # Tailwind base styles
│
├── package.json
└── README.md

🚀 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/counter-app-redux.git
cd counter-app-redux

2️⃣ Install dependencies
npm install

3️⃣ Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Update tailwind.config.js:

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


Add Tailwind to index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

4️⃣ Run the application
npm start

🖥️ How It Works

The Redux store is created in store.js and provided to the entire app using <Provider>.

counterSlice.js defines:

Initial state (count: 0)

Reducers for increment, decrement, and reset actions.

Counter.js:

Uses useSelector to read the current counter value.

Uses useDispatch to trigger actions.

Tailwind classes style the buttons and layout for a clean, responsive interface.

🎨 Example UI
------------------------
|     Counter: 0       |
|                      |
|  [+]  [-]  [Reset]   |
------------------------


+ Button: Adds 1 to the counter.

- Button: Subtracts 1 from the counter.

Reset Button: Sets the counter to 0.

📸 Screenshots

(Add your screenshots here)

📜 License

This project is licensed under the MIT License — feel free to modify and use for learning or personal projects.

📺 Demo Video

🔗 Click here to watch the demo