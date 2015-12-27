// I wasn't feeling sleepy this time.

function countRepos() {
	var totalRepos = document.getElementsByClassName("repo-list-item");
	var nums = 0;
	for (var i = 0; i.length < totalRepos.length; i++) {
		nums += 1;
	}

	var forkedRepos = document.getElementsByClassName("repo-list-info");
	var forks = 0;
	for (var n = 0; n.length < forkedRepos.length; n++) {
		forks += 1;
	}

	var mineRepos = (totalRepos.length - forkedRepos.length);

	return "Total Reposiories :" + " " + totalRepos.length + "\n" + 
		   "Forked Repositories :" + " " + forkedRepos.length + "\n" + 
		   "Original Repositories :" + " " + mineRepos;
}

console.log(countRepos());
