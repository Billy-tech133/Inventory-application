# Inventory Server

A Node.js/Express web application for managing clothing inventory, brands, designers, and price ranges. This project demonstrates RESTful API design, server-side rendering with EJS, modular architecture, and modern CSS layout techniques.

---

## Technologies Used

- **Node.js** & **Express**: Backend server and routing
- **PostgreSQL**: Relational database for persistent storage
- **pg**: PostgreSQL client for Node.js
- **EJS**: Templating engine for dynamic HTML views
- **dotenv**: Environment variable management
- **CSS (Flexbox)**: Responsive layout, sticky footer, and styled components

---

## Project Structure

```
inventory_server/
│
├── controllers/      # Route handler logic
├── db/               # Database setup, migration, and seeding scripts
├── model/            # Schema definitions
├── public/           # Static assets and CSS
├── queries/          # Database query functions
├── routes/           # Express routers
├── views/            # EJS templates and components
├── .env              # Environment variables
├── index.js          # App entry point
├── package.json      # Dependencies and scripts
└── ReadMe.md         # Project documentation
```

---

## Key Features & Design Principles

- **Modular Codebase**: Separation of concerns via controllers, queries, models, and routes.
- **RESTful API**: CRUD operations for clothes, brands, designers, and inventory.
- **Server-Side Rendering**: EJS templates for dynamic pages and reusable components (navbar, footer).
- **Database Migrations & Seeding**: Scripts for initializing and populating the PostgreSQL database.
- **Environment Configuration**: Secure credentials and settings via `.env`.
- **Responsive Design**: Flexbox-based layout for sticky footer and adaptive navigation.
- **Validation & Error Handling**: Input validation and informative error messages for robust UX.

---

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Configure environment**
   - Copy `.env.example` to `.env` and set your PostgreSQL connection string.

3. **Set up the database**
   ```sh
   node db/migrate.js      # Run migrations
   node db/seed.js         # Seed initial data
   ```

4. **Start the server**
   ```sh
   npm start
   ```

5. **Access the app**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- `npm start` — Start the Express server
- `node db/migrate.js` — Run database migrations
- `node db/seed.js` — Seed the database with sample data

---

## Contributing

Feel free to fork, open issues, or submit pull requests.  
For major changes, please open an issue first to discuss what you would like to change.

---

## License

MIT

---