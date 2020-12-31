require('dotenv').config();
module.exports = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
