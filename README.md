# Simple Express.js REST API for Users

>A basic REST API built with Node.js and Express.js that performs CRUD operations on users using PostgreSQL. This project demonstrates core backend development skills and RESTful API design principles.

---

## 🔧 Features

- **Full CRUD endpoints** for user management
- **PostgreSQL** database integration via the `pg` library
- **RESTful routing** architecture
- **Clean and modular** project structure
- Follows **Node.js non-blocking I/O** practices

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- A PostgreSQL database and user with appropriate permissions

### 📦 Installation

```bash
git clone git@github.com:adex-badr18/nodejs-users-api.git
cd express-users-api
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the project root with your PostgreSQL configuration:

```env
PGUSER=your_db_user
PGHOST=localhost
PGPASSWORD=your_db_password
PGDATABASE=your_db_name
PGPORT=5432
PORT=4000
```

### ▶️ Run the Server

```bash
npm run create
npm start
```

The server will run on: [http://localhost:4000](http://localhost:4000)

---

## 📘 API Documentation

### 🔗 Base URL

```
http://localhost:4000/
```

### 🧭 Endpoints

| Method | Endpoint      | Description              | Success Code | Error Codes                  |
|--------|--------------|--------------------------|--------------|------------------------------|
| GET    | /users       | Fetch all users          | 200 OK       |                              |
| GET    | /users/:id   | Fetch a user by ID       | 200 OK       | 404 Not Found                |
| POST   | /users       | Create a new user        | 201 Created  | 400 Bad Request              |
| PATCH  | /users/:id   | Partially update a user  | 200 OK       | 400 Bad Request, 404 Not Found |
| PUT    | /users/:id   | Fully update a user      | 200 OK       | 400 Bad Request, 404 Not Found |
| DELETE | /users/:id   | Delete a user            | 200 OK       | 404 Not Found                |

---

### 🔍 Sample API Requests

#### ➕ POST /users

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "age": 31
}
```

#### 📥 GET /users

```http
GET http://localhost:4000/users
```

#### 📥 GET /users/:id

```http
GET http://localhost:4000/users/1
```

#### ✏️ PUT /users/:id

```http
PUT http://localhost:4000/users/1
Content-Type: application/json

{
  "name": "Jane Updated",
  "email": "updated.jane@example.com"
}
```

#### 🛠 PATCH /users/:id

```http
PATCH http://localhost:4000/users/1
Content-Type: application/json

{
  "email": "patched.jane@example.com"
}
```

#### ❌ DELETE /users/:id

```http
DELETE http://localhost:4000/users/1
```

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg
- Joi

---

## ✅ Validation Rules

Validation rules are set with Joi:

- **id**: Required, integer, serial
- **name**: Required, string, minimum 3 characters
- **email**: Required, valid email format

---

## 📚 Learnings from the 3MTT Platform

- RESTful API design principles
- Database integration using PostgreSQL
- Route and controller modularization
- Environmental configuration using .env
- Error handling and HTTP status codes

---

## 🚀 Production Readiness

- Secure environment variable handling
- Add input validation and user authentication (JWT)
- Use structured logging (e.g., with winston)
- Use database migrations (knex, sequelize, etc.)
- Implement request rate limiting and error monitoring

---

## 🤝 Author

Badrudeen Adewumi Abdul-hameed  
Fellow | 3MTT Nigeria  
📧 adex.badr18@gmail.com

---

## 📬 Feedback or Contributions?

If you have suggestions or want to contribute, feel free to fork this repository and open a PR.

---

*Let me know if you'd like me to generate the sample `users` table schema for PostgreSQL or the actual backend code structure!*