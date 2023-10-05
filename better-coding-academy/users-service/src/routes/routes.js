import { Users } from "../../config/models"
import Password from "#root/helpers/hash";
import { generateUUID } from "#root/helpers/uuid";

const setupRoutes = app => {
  app.get("/users", async (req, res, next) => {
    try {
      const users = await Users.findAll()
      return res.json(users);
    } catch (e) {
      return next(e);
    }
  });

  app.post("/users", async (req, res, next) => {
    console.log('USER POST')

    if (!req.body.password || !req.body.email) {
      return next(new Error("Invalid body!"));
    }

    const id = generateUUID()
    const { email, password: rawPassword } = req.body  
    const hashedPassword = Password.hash(rawPassword)

    try {
      const users = await Users.create({ id, email, passwordHash: hashedPassword })
      return res.json(users)
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;