import mongoose from 'mongoose'

const uri = process.env.MONGO_URI || 'mongodb://localhost/api-ts'

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err))