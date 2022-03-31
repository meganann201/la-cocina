const router = require("express").Router();

//const userRoutes = require('./user-routes.js');
//const recipeRoutes = require('./recipe-routes');
//const commentRoutes = require('./comment-routes');
const categoryRoutes = require("./category-routes");
const favoriteRoutes = require("./favorite-routes");

//router.use('/users', userRoutes);
//router.use('/recipes', recipeRoutes);
//router.use('/comments', commentRoutes);
router.use("/categories", categoryRoutes);
router.use("./favorites", favoriteRoutes);

module.exports = router;
