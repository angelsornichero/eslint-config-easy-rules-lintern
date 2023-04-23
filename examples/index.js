let i = 0

function easy () {
	return i
}

easy()

const a = { a: 20 }

console.log(a)

const b = () => {
	return
}

b()

const c = [1, 1]


console.log(c) // Valid comment

async function d() {
	const a = await 2
	return a
}

d()