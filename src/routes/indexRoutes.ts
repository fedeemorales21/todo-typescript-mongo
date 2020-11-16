import { Router } from 'express'

const router : Router = Router()

router.get('/' ,(req,res) => {
    res.render('tasks/index')
})

export default router