import cors from 'cors'
import express, { Request as ExRequest, Response as ExResponse } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { RegisterRoutes } from 'routes'
import swaggerUi from 'swagger-ui-express'

const app = express()

// middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// app.use('/api', routes);
RegisterRoutes(app)

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('../src/swagger.json')))
})

app.get('/*', (req, res) => {
  return res.status(404).json({
    message: 'Not found!',
  })
})

export default app
