const peopleInSpace = () => {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.open("GET", "http://api.open-notify.org/astros.json");
		request.onload = () =>
			request.status === 200
				? resolve(JSON.parse(request.response))
				: reject(Error(request.statusText));
		request.onerror = error => reject(error);
		request.send();
	});
};
const peopleInSpaceV2 = () =>
	fetch("http://api.open-notify.org/astros.json")
		.then(response => response.json())
		.then(json => json.people);

peopleInSpace().then(
	response => {
		console.log("[V1 People in space right now :");
		response.people.forEach(item => {
			console.log(`• ${item.name}.`);
		});
	},
	error => console.log(error)
);
peopleInSpaceV2().then(
	people => {
		console.log("[V2] People in space right now :");
		people.forEach(item => {
			console.log(`• ${item.name}.`);
		});
	},
	error => console.log(error)
);
