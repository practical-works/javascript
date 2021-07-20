(async (user = "Ambratolm") => {
	let response = await fetch(
		`https://api.github.com/users/${user}/followers`
	);
	let data = await response.json();
	let logins = data.map(item => item.login);
	console.log(`Github.com/${user}\n\nFollowers (${logins.length}) :`);
	logins.forEach(item => console.log(`• ${item}`));
})();
