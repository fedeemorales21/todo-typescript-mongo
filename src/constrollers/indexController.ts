import { Request, Response } from 'express'
import Task from '../models/Task'

class IndexController {

    public async listTasks (req: Request, res: Response) {
        const tasks = await Task.find({done: false}).lean()
        res.render('tasks/index', { tasks })       
    }
    
    public renderAdd (req: Request, res: Response) {
        res.render('tasks/add')       
    }
    
    public async addTask (req: Request, res: Response) {
        const { title, description } = req.body
        const newTask = new Task({title,description})
        await newTask.save()
        res.redirect('/')      
    }

    public renderEdit (req: Request, res: Response) {
        res.render('tasks/index')       
    }

    public editTask (req: Request, res: Response) {
        res.render('tasks/index')       
    }
    
    public deleteTask (req: Request, res: Response) {
        res.render('tasks/index')       
    }

}

export default new IndexController()