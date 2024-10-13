const tab = document.querySelector("#output");

const random = () => {
	return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
};

tab.innerHTML = `
<tr>
<td>Loading...</td>
<td>Loading...</td>
</tr>
`;

function promise1() {
	return new Promise((resolve, reject) => {
		let time = random();
		setTimeout(() => {
			resolve(["Promise1", time]);
		}, time * 1000);
	});
}

function promise2() {
	return new Promise((resolve, reject) => {
		let time = random();
		setTimeout(() => {
			resolve(["Promise2", time]);
		}, time * 1000);
	});
}

function promise3() {
	return new Promise((resolve, reject) => {
		let time = random();
		setTimeout(() => {
			resolve(["Promise3", time]);
		}, time * 1000);
	});
}

Promise.all([promise1(), promise2(), promise3()])
.then(res => {
	tab.innerHTML = `
	<tr>
	<td>${res[0][0]}</td>
	<td>${res[0][1]}</td>
	</tr>
	<tr>
	<td>${res[1][0]}</td>
	<td>${res[1][1]}</td>
	</tr>
	<tr>
	<td>${res[2][0]}</td>
	<td>${res[2][1]}</td>
	</tr>
	`;
});

	

