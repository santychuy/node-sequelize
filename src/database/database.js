import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'primerejemplo', //Nombre DB
    'postgres',      //Nombre usuario
    'password',      //Contraseña usuario
    {
        host: 'localhost', //TODO: Se arregla esto para dar buena conectividad
        port: '5000', 
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)