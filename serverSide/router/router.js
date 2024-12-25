const express = require("express");
const animalRouter = require("../animals/endpoints/animalEndpoints"); // Animal endpoints
const exhibitRouter = require("../exhibits/endpoints/exhibitEndpoints"); // Exhibit endpoints
const reviewRouter = require("../reviews/endpoints/reviewEndpoints"); // Review endpoints
const visitorRouter = require("../visitors/endpoints/visitorEndpoints"); // Visitor endpoints
const { handleError } = require("../middlewares/errorHandler"); // Import error handling utility

const router = express.Router();

// Use Zoo prefix for routes
router.use("/animals", animalRouter);
router.use("/exhibits", exhibitRouter);
router.use("/visitors", visitorRouter);
router.use("/reviews", reviewRouter);

// Handle 404 errors
router.use((req, res) => {
    return handleError(res, 404, "Path not found");
});

// Export the router to use in the main application
module.exports = router;
