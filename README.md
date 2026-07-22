# 👥 React User Directory

A simple and responsive React application that fetches user information from a public API and displays it using reusable React components.

This project was built as part of a React learning assignment to understand how to fetch data from an API, manage state with React Hooks, and render dynamic content using reusable components. It demonstrates the core concepts of React while keeping the UI clean, responsive, and easy to understand.

---

## 🚀 Live Demo

🌐 **Netlify:** *Add your deployed URL here*

## 💻 GitHub Repository

🔗 *Add your GitHub repository link here*

---

## 📖 Project Overview

The application fetches user data from the **JSONPlaceholder** API when the page loads. The data is stored using React's `useState` hook and displayed through reusable **UserCard** components.

To improve the user experience, the application also includes loading and error handling while fetching data. The layout is fully responsive, making it accessible across desktops, tablets, and mobile devices.

---

## ✨ Features

- Fetches user data from a public REST API
- Uses React Hooks (`useState` and `useEffect`)
- Displays user information dynamically
- Reusable UserCard component
- Loading state while fetching data
- Error handling for failed API requests
- Responsive UI for all screen sizes
- Clean and organized project structure

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- JSX
- CSS3
- Vite
- Fetch API

---

## 📡 API Used

**JSONPlaceholder Users API**

https://jsonplaceholder.typicode.com/users

The API provides sample user information including:

- Name
- Email
- Phone
- Address
- Company

---

## 📂 Project Structure

```text
src/
│── components/
│   └── Card/
│       ├── Card.jsx
│       └── Card.css
│
│── App.jsx
│── App.css
│── main.jsx
```

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### Navigate to the project folder

```bash
cd your-repository-name
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

- Fetching API data in React
- Using `useEffect()` for side effects
- Managing state with `useState()`
- Rendering lists using the `map()` method
- Passing data through props
- Creating reusable React components
- Handling loading and error states
- Building responsive layouts with CSS

---

## 🔮 Future Enhancements

- 🔍 Search users by name
- 🏙️ Filter users by city
- 📄 Pagination
- 🌙 Dark mode
- 👤 Detailed user profile page
- ✨ Smooth animations and transitions

---

## 🙌 Acknowledgements

- **JSONPlaceholder** for providing a free REST API for practice.
- **React Documentation** for learning React fundamentals.
- This project was developed as part of a React assignment to strengthen practical knowledge of React Hooks, API integration, and component-based development.

---

## 📜 License

This project is created for educational purposes and is free to use.