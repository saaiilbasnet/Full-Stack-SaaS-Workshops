# 📚 Book API - MERN Stack Learning Project

This repository is part of my 12-day journey of learning the MERN Stack. The project is a backend Book API built using **Node.js**, **Express**, **PostgreSQL**, and **Sequelize ORM**, with clean code structure using the **MVCR architecture**.

---

## 🚀 Tech Stack

- **Node.js** – Server-side JavaScript runtime
- **Express.js** – Web application framework for Node.js
- **PostgreSQL** – Relational database (hosted on Supabase)
- **Sequelize** – ORM for interacting with PostgreSQL
- **Postman** – API testing and documentation tool

---

## 🧠 What I Learned

### General Concepts
- How a website works (Frontend vs Backend)
- APIs, HTTP methods (GET, POST, PUT, PATCH, DELETE)
- HTTP status codes (1xx–5xx)
- REST vs RESTful APIs
- JSON vs XML for data interchange
- API documentation and SEO use cases
- Environment variables and cleaner base URLs in Postman
- Browser sandbox and security basics

### Node.js & Express
- Node.js architecture (single-threaded, libuv, event loop, thread pool)
- Installing and initializing Node.js projects (`npm init`)
- Installing packages (`npm install`, `npm uninstall`)
- Creating and structuring servers using Express
- Using CommonJS (`require`, `module.exports`) vs ECMAScript modules

### PostgreSQL, Supabase & Sequelize
- Setting up cloud DB on Supabase
- Understanding drivers like `pg` for PostgreSQL
- Sequelize setup and connection
- ORM vs ODM (e.g., Sequelize vs Mongoose)
- Model definitions using `sequelize.define()`
- ORM methods: `.findAll()`, `.findByPk()`, `.create()`, `.update()`, `.destroy()`
- SQL injection protection
- Difference between raw queries and ORM abstraction

### Project Architecture (MVCR)
- MVCR pattern: Models, Views, Controllers, Routers
- Creating clean folder structures: `/models`, `/controllers`, `/routes`
- Routing using `express.Router()` and method chaining
- Modular exports: `module.exports = {}` and function-level exports
- Asynchronous code handling with `async/await`
- Error handling with `try/catch`

---

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/saaiilbasnet/Full-Stack-SaaS-Workshops.git
   cd book-api
