# 🔗 Deno Dynamic Backend API

A lightweight and flexible backend API built with [Deno](https://deno.com/) that supports dynamic RESTful routes and fetches data from either **Neon PostgreSQL** or **Deno KV** based on route paths.

## 🚀 Features

- ✅ Built using Deno's native HTTP server
- 🧠 Dynamic route handling (`/users`, `/products`, `/anything`)
- 🐘 Uses Neon (PostgreSQL) as the primary relational database
- 💾 Uses Deno KV for key-value storage and fallback
- 🔐 Lightweight and fast, no heavy framework required

---

## 📦 Project Structure
.
├── main.ts # Entry point of the Deno server
├── db/
│ ├── neon.ts # Neon PostgreSQL query logic
│ └── kv.ts # Deno KV read/write logic
├── routes/
│ └── dynamic.ts # Dynamic route handler logic
└── utils/
└── helpers.ts # Utility functions (e.g. table validation)

## 🛠️ Setup Instructions

### Prerequisites

- [Deno](https://deno.com/install)
- [Neon PostgreSQL Project](https://neon.tech/)
- `.env` file with the following:

```env
DATABASE_URL=<your_neon_postgres_url>
```
