import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://neymar_osf0_user:morGKf790VAJT8bhYlqG8bLNx6d3PAmn@dpg-cr7qs2d6l47c73bq69ng-a.oregon-postgres.render.com/neymar_osf0';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;