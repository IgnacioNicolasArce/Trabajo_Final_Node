## API Productos - Express + MongoDB

API REST para gestionar productos con operaciones CRUD.

### Requisitos

- Node.js 18+
- Cuenta de MongoDB Atlas (o instancia Mongo local)

### Variables de entorno

Crea un archivo `.env` en la raíz con:

```
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>/<db>?retryWrites=true&w=majority&appName=<appName>
```

### Instalación

```
npm install
```

### Desarrollo

```
npm run dev
```

### Producción

```
npm start
```

### Endpoints

- GET `/` → healthcheck
- GET `/api/products` → listar productos
- GET `/api/products/:id` → obtener producto por id
- POST `/api/products` → crear producto
  - body: `{ name: string, price: number, description?: string, category?: string, inStock?: boolean }`
- PUT `/api/products/:id` → actualizar producto
- DELETE `/api/products/:id` → eliminar producto

### Despliegue en Render

1. Sube el repo a GitHub.
2. En Render, crea un servicio Web → selecciona el repo.
3. Runtime: Node. Build command: `npm install`. Start command: `npm start`.
4. Configura variables de entorno: `PORT`, `MONGODB_URI`.

# Trabajo_Final_Node
