const glob = require('glob')
const fs = require('fs')

const getSpecPath = (configPath = 'cypress.json') => {
  const rawData = fs.readFileSync(configPath)
  const config = JSON.parse(rawData)
  const specPath =
    config.integrationFolder ?? config.e2e?.specPattern ?? 'cypress/integration'
  return specPath
}

const files = glob.sync(`${getSpecPath()}/*.js`)
process.stdout.write(JSON.stringify(files))
