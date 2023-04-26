import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let json

try {
	json = JSON.parse(fs.readFileSync(path.join(__dirname + '/../.eslintrc.json'), 'utf8'))
} catch (err) {
	console.log(err)
}

describe('Eslint objects', () => {
	it('env should be a object', () => {
		expect(json.env).toBeTypeOf('object')
	})

	it('extends should be a array', () => {
		expect(json.extends).toBeTypeOf('object')
	})


	it('ecmaVersion should be 2022', () => {
		expect(json.parserOptions.ecmaVersion).toBe(2022)
	})

})

