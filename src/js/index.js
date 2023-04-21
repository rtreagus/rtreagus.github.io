function findElement(classname) {
	return document.querySelector(`.${classname}`);
}

const display = findElement("main__display");
const isMobile = window.innerWidth < 810;

document.addEventListener("mousemove", (e) => {
	rotateElement(e, display);
});

function rotateElement(event, element) {
	if (isMobile) return;

	const x = event.clientX;
	const y = event.clientY;

	const middleX = window.innerWidth / 2;
	const middleY = window.innerHeight / 2;

	const offsetX = ((x - middleX) / middleX) * 20;
	const offsetY = ((y - middleY) / middleY) * 20;

	element.style.setProperty("--rotateX", offsetX + "deg");
	element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}
