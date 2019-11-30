import Project from '../models/Project';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json({ data: projects });
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ msg: 'Something Failed!', data: {} });
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description, delivery } = req.body;
    try {
        let newProject = await Project.create({
            name, priority, description, delivery
        }, {
            fields: ['name', 'priority', 'description', 'delivery']
        });

        if (newProject) res.status(200).json({ msg: 'Project created succesfully!', data: newProject });
    } catch (e) {
        console.log(e.message);
        res.status(400).json({ msg: 'Failed to create project', data: {} });
    }
};