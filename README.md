
# CRUD Operations Web App

🚀 A simple yet powerful web application demonstrating **CRUD (Create, Read, Update, Delete)** operations. Built using **React**, **Tailwind CSS**, **Axios**, **JSON Server**, and **Express**.

## 🛠 Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: JSON Server (Mock API), Express.js
- **API Requests**: Axios
- **Styling**: Tailwind CSS
- **Tooling**: Node.js, npm/yarn

## 📦 Features
- Perform **CRUD operations** (Create, Read, Update, Delete) on user data.
- **React.js** for building dynamic and responsive user interfaces.
- **Tailwind CSS** for styling and responsive design.
- **Axios** for handling API requests.
- **JSON Server** for a quick mock backend.
- **Express.js** for managing server-side logic.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dp-shetty/CRUD-OP.git
cd CRUD-OP
```

### 2. Install dependencies

```bash
# For npm
npm install

# For yarn
yarn install
```

### 3. Run the app

#### Start the JSON Server (Mock API)
```bash
npx json-server --watch db.json --port 5000
```

#### Start the React app
```bash
npm start
```

The app will be available at **http://localhost:3000** and the JSON Server mock API will be running at **http://localhost:5000**.

## 📁 Project Structure

```
├── public/             # Public directory
├── src/                # Source files
│   ├── components/     # React components
│   ├── services/       # Axios services for API requests
│   ├── pages/          # Application pages
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
├── db.json             # JSON Server database
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## 💻 CRUD Functionality Overview

- **Create**: Add new entries to the system via the frontend form.
- **Read**: Fetch and display data from the backend (JSON Server).
- **Update**: Modify existing entries and reflect changes in the database.
- **Delete**: Remove entries from the backend using API requests.

## 🌐 API Endpoints (JSON Server)

- `GET /items` - Get all items
- `POST /items` - Create a new item
- `PUT /items/:id` - Update an item by ID
- `DELETE /items/:id` - Delete an item by ID

## 🎨 Styling

This app uses **Tailwind CSS** for styling. You can customize styles in the `tailwind.config.js` file and apply utility classes directly in your components.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 📝 License

This project is licensed under the MIT License.

---
