'use strict'

const os = require('os')
const platform = os.platform()
const cpus = os.cpus().length
const result = `Ich laufe auf einem Rechner mit ${platform} und ${cpus} CPUs`

console.log(result)
