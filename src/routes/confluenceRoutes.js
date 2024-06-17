import express from "express";
import { getConfluencePages } from "../api/confluence.js";

const router = express.Router();

router.post("/confluence", async (req, res) => {
    const pages = await getConfluencePages();

    res.send(pages);
});

export default router;