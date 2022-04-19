import { Sequelize } from "sequelize";
const db = new Sequelize('mern_db','root','root',{
  host:"localhost",
  dialect:"mysql"
});

export default db;