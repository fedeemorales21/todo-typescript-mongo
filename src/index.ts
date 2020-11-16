import express, { Application } from 'express'
import exphbs from 'express-handlebars'
import { join } from 'path'
import * as dotenv from 'dotenv'

import indexRoutes from './routes/indexRoutes'

// init
dotenv.config()
const app:Application = express()
import './db'

// settings
app.set('port', process.env.PORT || 5000)
app.set('views', join(__dirname, 'views'))

app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: join(app.get('views'),'layouts'),    
    partialsDir: join(app.get('views'),'partials'),
    defaultLayout: 'main'    
}))
app.set('view engine', '.hbs')

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', indexRoutes)

// statics files
app.use(express.static(join(__dirname,'public')))

// running server
app.listen(app.get('port'), () => console.log("Server on port", app.get('port')))
