## RepoCount

> A small javascript snippet to show the exact number of forked, genuine and total repository by a github user.

## Running

> Paste the below code in your chrome console and hit enter.

```js
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
```

## NOTE

```
Before, this code used to work for all the github users.
But now, github shows only 200 repository of a user on single page.
So, this code will work only if the user has 200 repositories.
```
