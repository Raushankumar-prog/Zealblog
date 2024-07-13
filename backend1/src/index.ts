import * as dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT ||4001;

import app from './server'

app.listen(port, () => {
  console.log('hello on http://localhost:4001')
})