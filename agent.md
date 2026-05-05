# Agent Context - SitioOLXRevisado

## Project Overview
Clone OLX style marketplace for Grupo PS. Node.js/Express backend with MySQL database.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express v5.1.0
- **Database:** MySQL (mysql2 v3.15.0) with connection pool
- **File uploads:** Multer v2.0.2
- **Other:** cors, body-parser, dotenv, morgan
- **Dev:** nodemon

## Project Structure
```
SitioOLXRevisado/
├── server.js              # Entry point, routes mounting
├── config.js              # Configuration
├── db/
│   └── db.js              # MySQL connection pool
├── controllers/
│   ├── ventas.controller.js
│   ├── suscripciones.controller.js
│   └── correo.controller.js
├── routes/
│   ├── ventas.routes.js
│   ├── suscripciones.routes.js
│   └── correo.routes.js
├── middleware/
│   └── multer.js          # File upload middleware
├── public/                # Static HTML/CSS frontend
│   ├── home.html
│   ├── form.html
│   ├── formVenta.html
│   ├── detail.html
│   ├── edit.html
│   ├── ventas.html
│   └── styles.css
├── uploads/               # Uploaded images storage
└── package.json
```

## API Endpoints

### Ventas (publicaciones de venta)
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/ventas` | List all ventas |
| GET | `/api/ventas/:id` | Get single venta |
| POST | `/api/ventas` | Create venta (with image upload) |
| PUT | `/api/ventas/:id` | Update venta (with image upload) |
| DELETE | `/api/ventas/:id` | Delete venta |

### Suscripciones
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/suscripciones` | List all suscripciones |
| GET | `/api/suscripciones/:id` | Get single suscripcion |
| POST | `/api/suscripciones` | Create suscripcion |
| PUT | `/api/suscripciones/:id` | Update suscripcion |
| DELETE | `/api/suscripciones/:id` | Delete suscripcion |

### Correo
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/correo` | List all correos |
| POST | `/api/correo` | Create correo |

## Database Schema (MySQL: grupo_ps)

### Table: ventas
```sql
id          INT AUTO_INCREMENT PRIMARY KEY
titulo      VARCHAR(255) NOT NULL
descripcion TEXT
precio      DECIMAL(12,2)
categoria   VARCHAR(100)
ubicacion   VARCHAR(255)
created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

### Table: suscripciones
```sql
id        INT AUTO_INCREMENT PRIMARY KEY
nombre    VARCHAR(200) NOT NULL
email     VARCHAR(200) NOT NULL
mensaje   TEXT NOT NULL
role      ENUM('administrador', 'miembro', 'usuario') NOT NULL
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

### Table: correo
```sql
id      INT AUTO_INCREMENT PRIMARY KEY
correo  VARCHAR(200) NOT NULL
```

## Running the Project
```bash
npm install     # install dependencies
npm run dev     # start with nodemon (auto-reload)
npm start       # production start
```
Server runs on `http://localhost:3000`

## Conventions
- **Routes** define endpoints and delegate to controllers
- **Controllers** handle business logic and DB queries
- **DB** uses mysql2/promise with connection pool
- **File uploads** via Multer middleware on ventas POST/PUT
- **Static assets** served from `/public/` and `/uploads/`
- **Frontend** is plain HTML + CSS (no framework)

## Important Notes
- DB credentials are hardcoded as fallback in `db/db.js` (consider using .env)
- Images are stored in `/uploads/` directory
- No authentication middleware currently implemented
- No tests present in the project
