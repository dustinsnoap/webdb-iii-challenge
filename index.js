const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
const cohortsRoutes = require('./routes/cohorts/routes')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/cohorts', cohortsRoutes)

const port = 3333
server.listen(port, function() {
    console.log(`\n*** Everything's good in the neighborhood on port ${port} ***\n`)
})