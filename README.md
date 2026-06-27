# Student API

A simple REST API for managing students.

---

## Features

- Add student
- Delete student
- Update student
- View student list

---

## Technologies

- Node.js
- Express

---

## Installation

```bash
npm install
```

---

## Run

```bash
node index.js
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000
JWT_SECRET=your_secret
```

---
## Project Structure

```text
student-api/
│
├── index.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

## Login

POST /login

Request

```json
{
  "email":"john@example.com",
  "password":"123456"
}
```

Response

```json
{
  "token":"abc123"
}
```