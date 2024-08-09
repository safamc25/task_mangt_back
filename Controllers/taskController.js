const tasks = require("../Models/TaskModel")

exports.addTask=async(req,res)=>{
    
    const { title, description, duedate, status,userId} = req.body;

   


    try {
        const existingTask = await tasks.findOne({ title })
        if (existingTask) {
            res.status(400).json(`${existingTask.title} is already exist! add new one`)
        }
        else {
            const newTask = new tasks({
                title, description, duedate , status,userId
            })
            await newTask.save()
            res.status(201).json(newTask)
        }
    }
    catch {
        res.status(400).json("add project api failed")

    }
}


// view task


exports.getUserTasks = async (req, res) => {
    const userId = req.params.userId; 

    try {
        const userTasks = await tasks.find({ userId });
        if (userTasks.length > 0) {
            res.status(200).json(userTasks);
        } else {
            res.status(404).json({ message: "No tasks found for this user" })
        }
    } catch (error) {
        res.status(400).json({ error: "Failed to fetch tasks" })
    }
}


// view singletask by taskid
exports.getSingleTask = async (req, res) => {
    const { taskId } = req.params; 

    try {
        const singleTask = await tasks.findById(taskId); 
        if (singleTask) {
            res.status(200).json(singleTask);
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(400).json({ error: "Failed to fetch task" });
    }
};

// delete
exports.deleteTask = async (req, res) => {

    const { taskId} = req.params

    try {
        const deletedTask = await tasks.findByIdAndDelete(taskId)
        res.status(200).json(deletedTask)
    }
    catch (error) {
        res.status(400).json(error)
    }

}


exports.editTask = async (req, res) => {
    const { taskId } = req.params;
    const { title, description, duedate,status } = req.body;

    try {
     
        const updatedTask = await tasks.findByIdAndUpdate(
            taskId, 
            { title, description, duedate,status },
            { new: true } 
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: "Failed to update task" });
    }
};
