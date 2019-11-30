import { INTEGER, TEXT, DATE } from 'sequelize';
import { sequelize } from '../database/database'; 

import Tasks from './Task';

const Projects = sequelize.define('projects', {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    name: {
        type: TEXT
    },
    priority: {
        type: INTEGER
    },
    description: {
        type: TEXT
    },
    delivery: {
        type: DATE
    }
}, {
    timestamps: false
});

Projects.hasMany(Tasks, { foreingkey: 'projectID', sourceKey: 'id' }); //Poder hacer la relacion de tablas
Tasks.belongsTo(Projects, { foreingkey: 'projectID', sourceKey: 'id' });

export default Projects;