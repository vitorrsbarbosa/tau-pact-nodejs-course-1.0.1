const path = require("path")
const Pact = require("@pact-foundation/pact")

global.port = 8081
global.provider = new Pact({
    port: global.port,
    log: path.resolve(process.cwd(), "__tests__/contratct/logs", "logs-pact.log"),
    dir: path.resolve(process.cwd(), "__test__/contracts/pacts"),
    spec: 2,
    logLeve: 'INFO',
    pactfileWriteMode: 'overwrite',
    consumer: 'Frontend',
    provider: 'ClientsService'
})