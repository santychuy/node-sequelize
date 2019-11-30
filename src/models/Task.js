import { BOOLEAN, TEXT, INTEGER } from 'sequelize';
import { sequelize } from '../database/database';

const Tasks = sequelize.define('tasks', {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    name: {
        type: TEXT
    },
    done: {
        type: BOOLEAN
    },
    projectID: {
        type: INTEGER
    }
}, {
    timestamps: false
});

export default Tasks;