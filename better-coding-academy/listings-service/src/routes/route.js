import { Listings } from "../../config/models"

const setupRoutes = app => {
  app.get("/listings", async (req, res, next) => {
    try {
      const listings = await Listings.findAll()
      return res.json(listings);
    } catch (e) {
      return next(e);
    }
  });

  app.post("/listings", async (req, res, next) => {
    
    if (!req.body.description || !req.body.title) {
      return next(new Error("Invalid body!"));
    }
    const { title, description } = req.body

    try {
      const listing = await Listings.create({ description, title });
      return res.json(listing);
    } catch (e) {
      console.log(e);
      return next(e);
    }
  });
};

export default setupRoutes;
