import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

const app = express();

import ProjectsRoutes from './routes/projects';
import TasksRouter from './routes/tasks';

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended: false}));

app.use('/api/project', ProjectsRoutes);
app.use('/api/tasks', TasksRouter);


export default app;