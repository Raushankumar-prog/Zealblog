import * as dotenv from 'dotenv'
dotenv.config()

import app from './server'

app.listen(4001, () => {
  console.log('hello on http://localhost:4001')
})