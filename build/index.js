'use strict'

const lessPath = require('../less.json')
const execSync = require('child_process').execSync
const existsSync = require('fs').existsSync
const path = require('path')

const OUTPUT_PATH = '../../workspace/demo/html/'

let cli = []


for (let i in lessPath) {
	let assestPath = lessPath[i]

	const filePath = path.join(__dirname, `../${assestPath}`);

	if (existsSync(filePath)) {
		cli.push(`lessc -x ${ assestPath } ${ OUTPUT_PATH }${ i }/index.css`)
	}
}


cli.forEach(item => {
	execSync(item, {
		stdio: 'inherit'
	})
})