import { Users, Session } from "../../config/models"
import Password from "#root/helpers/hash";
import { generateUUID } from "#root/helpers/uuid";
import { addHours } from 'date-fns'

const USER_SESSION_EXPIRY_HOURS = 2

const setupRoutes = app => {

  app.post("/sessions", async (req, res, next) => {
    console.log('SESSIONS POST')

    if (!req.body.email || !req.body.password) {
      return next(new Error("Invalid body!"));
    }

    try {
      const user = await Users.findOne({ where: { email: req.body.email } });

      if (!user) return next(new Error("Invalid email!"));

      if (!Password.verify(user.passwordHash, req.body.password)) {
        return next(new Error("Incorrect password!"));
      }

      const expiredAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);
      const sessionToken = generateUUID(); 

      const userSession = await Session.create({
        expiredAt,
        id: sessionToken,
        userId: user.id
      })
      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });


  app.get("/users", async (req, res, next) => {
    try {
      const users = await Users.findAll()
      return res.json(users);
    } catch (e) {
      return next(e);
    }
  });


  app.get("/users/:id", async (req, res, next) => {
    const id = req.params.id
    try {
      const user = await Users.findOne({ where: { id }})
      if(!user) return next(new Error("Invalid user ID"));
      return res.json(user);
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

  app.get("/sessions/:sessionId", async (req, res, next) => {
    const id = req.params.sessionId
    try {
      const userSession = await Session.findByPk(id)
      if (!userSession) return next(new Error("Invalid session ID"));
      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

};

export default setupRoutes;