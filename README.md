#  Money Tracker

Money tracker is a tool designed to help you manage your expenses efficiently. It enables you to keep a record of your daily expenses and provides you with a summarized overview of your expenditures based on different categories.


## 📒 Demo

Click the image to view the video introduction.

[![IMAGE ALT TEXT HERE](img.png)](https://www.youtube.com/watch?v=8Z74b9XpRYo)


- **Home Page Summary**: When you land on the home page, you'll see a summarized view of your expenses categorized by various categories.

- **Adding Expenses**: By clicking the "Add Expenses" button, you can access a form where you can enter your expense details. A detailed expense history is displayed, with the latest records shown at the top.

- **Submitting Expenses**: When adding a new expense, fill in the required fields, such as the amount (e.g., $10.5) and select the appropriate category (e.g., Bills). Once added, the new record will appear at the top of the history. Importantly, these updates are instantly reflected on all connected screens.

- **Real-time Data Update**: Open multiple tabs and observe how changes made in one tab are dynamically updated on other tabs as well.

## 🏃 How to run

1. Run `npm start` in the `client` directory.
2. Run `npm run dev` in the `api` directory simultaneously in a different terminal.


## 🧑‍💻 Code Structure

The Money Tracker project is built using the MERN stack with TypeScript and Storybook. The codebase is organized into front-end and back-end components.

### Front-End

- **Entry Point**: The entry point for the front-end is `App.tsx`.
- **Routing**: We utilize Router to navigate between different pages, including the home page and record page.
- **Components**: A range of components such as Button, Header, Dropdown, InputNumber, Form, and Table have been developed to support the front-end functionality. All components are designed using functional components and utilize React hooks for state management. Additionally, we've integrated socket.io to ensure real-time updates of data.

### Back-End

- **Entry Point**: The entry point for the back-end is `index.ts`.
- **Code Organization**: The back-end is neatly organized into routers, controllers, and models, each with its specific role in executing business logic.
- **Utilities and Configurations**: Essential utility functions and configurations are included.

### Database
- Data is stored in MongoDB, providing robust and persistent data storage.

### Storybook

- **Different variations of the Button component**: Active, Inactive, Large, Small.
- **Header components with variations**: Title-only and Title with Back Button.
