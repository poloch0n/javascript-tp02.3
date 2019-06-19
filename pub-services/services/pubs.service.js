//module fs to read JSON
const fs = require('fs');

//fonction 1 :
/// lister tout les pubs
function listePubs() {
	let pubs = JSON.parse(fs.readFileSync('pubs.json')); 
	pubs = pubs.map(x => x.name);
	return pubs;
}

//fonction 2 :
///lister les pubs ouvert en fonction du jour actuel
function listePubsNow(day) {
	let pubs = JSON.parse(fs.readFileSync('pubs.json'));
	pubs = pubs.filter(x.openDays.contains(day)).map(x => x.name);
	return pubs
}

export.listePubs = listePubs;
export.listePubsNow = listePubsNow;