# 📌 Task Tracker

A full-featured **Task Tracker backend** built using **Node.js**, **TypeScript**, **Express**, **PostgreSQL**, and **Drizzle ORM**. The application supports user registration, authentication using JWT, and complete CRUD functionality for managing tasks.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login with JWT)
- 🛡️ Middleware-based route protection
- 📋 Task management (Create, Read, Update, Delete)
- 🌱 Environment variable configuration with `dotenv`
- 🧾 Type-safe schema with Drizzle ORM
- 🧪 Input validation using Zod
- ⚡ TypeScript + tsx/ts-node-dev for smooth dev experience

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **PostgreSQL**
- **Drizzle ORM**
- **JWT (JSON Web Tokens)**
- **Zod**
- **dotenv**
- **tsx** / **ts-node-dev**

---

## 📁 Project Structure

```
task-tracker/
├── drizzle.config.ts
├── package.json
├── tsconfig.json
├── .env
├── src/
│   ├── index.ts
│   ├── db.ts
│   ├── schema/
│   ├── routes/
│   ├── middleware/
│   └── utils/
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Murtaza99dev/task-tracker.git
cd task-tracker/backend
yarn install
```

### 2️⃣ Create .env File

```
PORT=5000
JWT_SECRET=your_jwt_secret_key
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=task_db
DATABASE_URL=postgresql://your_postgres_user:your_postgres_password@localhost:5432/task_db
```

### 3️⃣ Run the Project

```bash
yarn dev
```

The server should now be running at: [http://localhost:5000](http://localhost:5000)

---

## 🧪 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint        | Description           |
|--------|----------------|-----------------------|
| POST   | /api/register  | Register new user     |
| POST   | /api/login     | Login and get JWT     |

### ✅ Task Routes (Protected)

| Method | Endpoint         | Description         |
|--------|-----------------|---------------------|
| GET    | /api/tasks      | Get all tasks       |
| POST   | /api/tasks      | Create new task     |
| PUT    | /api/tasks/:id  | Update task         |
| DELETE | /api/tasks/:id  | Delete task         |

> **Note:** All `/api/tasks` endpoints require a JWT token in the request header:
>
> ```
> Authorization: Bearer <your_jwt_token>
> ```

---

## 🧰 Drizzle ORM Commands

Run after creating or modifying your schema in `src/schema`.

**Push Schema to DB**
```bash
npx drizzle-kit push
```

**Generate SQL from Schema**
```bash
npx drizzle-kit generate
```

---

## 🧑‍💻 Development Tools

Start server in watch mode:

```bash
yarn dev
```

**Drizzle ORM setup config (`drizzle.config.ts`):**
```ts
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  schema: "./src/schema",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});
```

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🙋‍♂️ Author

**Ghulam Murtaza**

- GitHub: [@Murtaza99dev](https://github.com/Murtaza99dev)
- Email: murtaza99.dev@gmail.com
- LinkedIn: [https://www.linkedin.com/in/im-ghulam-murtaza/](https://www.linkedin.com/in/im-ghulam-murtaza/)

---

## 🧠 Future Improvements

- 📅 Task due dates and prioritization
- 📊 Task analytics
- 🌐 Frontend integration (React/Next.js)
- 🧑‍🤝‍🧑 Team/task sharing

---

Let me know if you want a separate Postman/Bruno collection JSON or frontend instructions added.
