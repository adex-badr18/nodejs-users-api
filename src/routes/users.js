import e from "express";

const router = e.Router();

// Map routes to handlers
router.get("/", (req, res) => {
    res.send("Route Function");
});

router.get("/:id", (req, res) => {
    res.send("Route Function");
});

router.post("/", (req, res) => {
    res.send("Route Function");
});

router.put("/:id", (req, res) => {
    res.send("Route Function");
});

router.delete("/:id", (req, res) => {
    res.send("Route Function");
});

export default router;
