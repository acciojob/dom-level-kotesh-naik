//your JS code here. If required.
const torgetlevel = document.getElementById("level");
function getDomLevel(element){
	let level = 0;
	while (element){
		level++;
		element = element.parentElement;
	}
	return level;
}
const domLevel= getDomLevel(targetLevel);
alert(`The level of element is : ${domLevel}`);
}