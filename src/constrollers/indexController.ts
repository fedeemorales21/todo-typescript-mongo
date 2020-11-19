import { Request, Response } from 'express'
import Task from '../models/Task'

class IndexController {

    public async listTasks (req: Request, res: Response) {
        const tasks = await Task.find({ done: false }).lean()
        res.render('tasks/index', { tasks })       
    }
    
    public renderAdd (req: Request, res: Response) {
        res.render('tasks/add')       
    }
    
    public async addTask (req: Request, res: Response) {
        const { title, description } = req.body
        const newTask = new Task({ title, description })
        await newTask.save()
        res.redirect('/')      
    }

    public async renderEdit (req: Request, res: Response) {
        const task =  await Task.findById(req.params.id).lean()
        res.render('tasks/edit', { task })       
    }

    public async editTask (req: Request, res: Response) {
        const { id } = req.params
        const { title, description } = req.body
        await Task.findByIdAndUpdate(id, { title , description })
        res.redirect('/')
    }
    
    public async deleteTask (req: Request, res: Response) {
        await Task.findByIdAndDelete(req.params.id)
        res.redirect('/')
    }

}

export default new IndexController()