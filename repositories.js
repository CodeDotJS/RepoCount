// Probably drunk 

var i = 0;
var total = document.getElementsByClassName("repo-list-item");
for (var i = 0; i.length < total.length; i++) {
	console.log(total.length);
}
console.log("Total Reposiories :" + " " + total.length);

var forked = document.getElementsByClassName("repo-list-info");
for (var n = 0; n.length < forked.length; n++) {
	console.log(forked.length);
}
console.log("Forked Repositories :" + " " + forked.length);

var mine = (total.length - forked.length);
console.log("My Repositories :" + " " + mine);
