const navSlider = () => {
		const mainNav = document.querySelector('.nav-links');
		const navBarToggle = document.querySelector('.navbar-toggle');

		navBarToggle.addEventListener('click',() => {
				mainNav.classList.toggle("mob-nav-active");
			});
}

navSlider();
