import express from "express"
import { Addtask, DeleteTask, getTask, UpdateTask } from '../controllers/task.controller.js';
 const router = express.Router()


//task
router.post("/addtask" , Addtask )
router.put("/updatetask/:id" , UpdateTask );
router.delete("/deleteTask/:id" , DeleteTask );
router.get("/getTask/:id" , getTask )

 export default router;