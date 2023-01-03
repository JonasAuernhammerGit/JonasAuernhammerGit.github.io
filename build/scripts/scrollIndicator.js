/**
 * Scroll Indicator Progress Bar
 */

 const handleScrollIndicator = () => {
	const scrollIndicator = document.querySelector("#scrollIndicator");
	const maxHeight = document.body.scrollHeight - window.innerHeight;

	const widthPercentage = (window.scrollY / maxHeight) * 100;
	scrollIndicator.style.width = `${widthPercentage}%`;
};

window.addEventListener("scroll", handleScrollIndicator);
