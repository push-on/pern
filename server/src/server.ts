import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    "gender": "male",
    "name": { "title": "Monsieur", "first": "Aaron", "last": "Pierre" },
    "location": {
      "street": { "number": 4477, "name": "Avenue de la Libération" },
      "city": "Kaiserstuhl",
      "state": "Uri",
      "country": "Switzerland",
      "postcode": 7305,
      "coordinates": { "latitude": "-63.1634", "longitude": "-80.8991" },
      "timezone": { "offset": "-3:30", "description": "Newfoundland" }
    },
    "email": "aaron.pierre@example.com",
    "login": {
      "uuid": "0d5706d3-2d7a-4d32-85fe-b81eb9f1bf69",
      "username": "whiteswan746", "password": "experience"
    }
  })
})

const port = Number(process.env.PORT ?? 8080)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at http://localhost:${port}`)
})
