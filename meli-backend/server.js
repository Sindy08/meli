const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const itemsRoutes = require('./routes/itemsRoutes');
const logger = require('./middleware/logger'); // Importamos el middleware

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger); // Usamos el middleware para registrar solicitudes

// Rutas
app.use('/api/items', itemsRoutes);

// Iniciar servidor
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
