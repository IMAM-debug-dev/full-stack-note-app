import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import List from "../models/list.model.js";

export const Addtask = async ( req , res ) => {
    try {

        const { title , body , email } = req.body;

        const existUser = await User.findOne({ email });
        if(!existUser){
          return  res.status(400).json({
                sucess: false,
                message:"User are not registred"
            })
        } 

        // create new task 
        const list = new List({
            title,
            body, 
            user: existUser._id
        })

        await list.save();
        

        // add to task to user list 
        existUser.list.push(list._id);
        await existUser.save();


         return res.status(201).json({
            success: true,
            message: "Task added successfully",
            list
        });
        
    } catch (error) {
        console.log("Addtask Error:", error);
        res.status(500).json({
            sucess:false,
            message:"internal server error"
        })
    }
}


//update task

export const UpdateTask = async (req, res) => {
    try {
        const { title, body, email } = req.body;

        const existsUser = await User.findOne({ email });

        if (!existsUser) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        const updateTask = await List.findOneAndUpdate(
            {
                _id: req.params.id,
                user: existsUser._id
            },
            {
                title,
                body
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updateTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: updateTask
        });

    } catch (error) {
        console.log("UpdateTask Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Delete task

export const DeleteTask = async (req , res ) => {
    try {
        const { email } = req.body;
        const existsUser = await User.findOne({ email });

        if (!existsUser) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        const deleteTask = await List.findByIdAndDelete({
            _id: req.params.id,
                user: existsUser._id
        });

        if(!deleteTask){
            res.status(404).json({
                success: false,
                message: "Task are not found"
            })
        }

        return res.status(201).json({
            sucess: true,
            message:"Note delete sucessfully"
        })





    } catch (error) {
        console.log("DeleteTask Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//get task
export const getTask = async (req , res ) => {
   try {
    const { email } = req.body;

   const existUser = await User.findOne({ email });
   
   if(!existUser){
    return res.status(401).json({
        success: false,
        message:"User not found"
    })
   }

    const list = await List.find({ user: req.params.id });
         
    if (list.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No tasks found"
            });
        }

     return res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            totalTasks: tasks.length,
            data: tasks
        });

   } catch (error) {
        console.log("DeleteTask Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
