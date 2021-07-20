const get = (msg, sec) => 
	setTimeout(() => console.log(`${msg} in ${sec} sec.`), 1000*sec);

const get2 = (msg, sec) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(`${msg} in ${sec} sec.`);
			resolve();
		}, 1000*sec);
	});
};

// get("1. async long operation", 5);
// get("2. async short operation", 1);
// console.log("3. sync operation.");

// get2("1. async long operation", 5).then(() => {
// 	get2("2. async short operation", 1).then(() => {
// 		console.log("3. sync operation.");
// 	});
// });
// console.log("4. lel xD");

(async () => {
	await get2("1. async long operation", 5);
	await get2("2. async short operation", 1);
	console.log("3. sync operation.");
})();

