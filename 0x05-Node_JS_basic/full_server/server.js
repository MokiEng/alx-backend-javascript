import express from 'express';
import routes from './routes';

const app = express();

app.use('/', routes);

const PORT = process.env.PORT || 1245;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
