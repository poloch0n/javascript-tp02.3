//module fs to read JSON
const pubs = require('../mocks/pubs.json');

//fonction 1 :
/// lister tout les pubs
function getListPub() {
	return pubs.map(x => x.name);
}

//fonction 2 :
///lister les pubs ouvert en fonction du jour actuel
function getListPubNow(day) {
	return pubs.filter(x.openDays.contains(day)).map(x => x.name);
}

exports.getListPub = getListPub;
exports.getListPubNow = getListPubNow;