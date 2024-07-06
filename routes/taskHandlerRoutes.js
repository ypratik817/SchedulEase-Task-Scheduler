const express = require("express");
const router = express.Router();
const {
    addTask,
    getAllTasks,
    deleteAllTasks,
    getTasksByStatus,
} = require("../controllers/taskController");

router.route("/add-task").post(addTask);
router.route("/tasks").get(getAllTasks).delete(deleteAllTasks);
router.route("/tasks/:status").get(getTasksByStatus);

module.exports = router;