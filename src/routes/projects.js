import { Router } from 'express';
const router = Router();

import { createProject, getProjects } from '../controllers/projects.controller';

router.get('/', getProjects);
router.post('/', createProject);

export default router;