const f = 0

function ease(param: number) {
	return param
}

ease(f)

const e = { a: 20 }

console.log(e)

const g = () => {
	return
}

g()

const h = [1, 1]

console.log(h) // Valid comment

async function t() {
	const a = await 2
	return a
}

t()

for (let i = 0; i < 10; i++) {
	console.log(i)
}