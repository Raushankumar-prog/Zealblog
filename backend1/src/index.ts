import * as dotenv from 'dotenv'
import app from './server'
dotenv.config()
const port = process.env.PORT ||4001;



app.listen(port, () => {
  console.log('hello on http://localhost:4001')
})