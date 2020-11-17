import { Request, Response } from 'express'
import Task from '../models/Task'

class IndexController {

    public async listTasks (req: Request, res: Response) {
        const tasks = await Task.find({done: false})
        res.render('tasks/index', { tasks })       
    }
    
    public renderAdd (req: Request, res: Response) {
        res.render('tasks/index')       
    }
    
    public addTask (req: Request, res: Response) {
        res.render('tasks/index')       
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