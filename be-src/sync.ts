import { sequelize } from "./db/conection";

sequelize.sync({ force: true }).then(() => {
  console.log("Se sincronizo la DB");
});
