import { Router } from 'express'
import indexController from '../constrollers/indexController'

const router : Router = Router()

router.get('/' , indexController.listTasks )
router.get('/add' , indexController.renderAdd )
router.post('/add' , indexController.addTask )
router.get('/edit/:id' , indexController.renderEdit )
router.put('/edit/:id' , indexController.editTask )
router.delete('/delete/:id' , indexController.deleteTask )

export default router