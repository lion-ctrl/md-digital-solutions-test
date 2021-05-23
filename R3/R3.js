document.addEventListener("DOMContentLoaded", () => {
	/* Variables
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
	/**
	 * This variable stores the modal window
	 * @type {HTMLElement}
	 */
	const modal = document.querySelector("#modal");

	/**
	 * This variable stores the video
	 * @type {HTMLVideoElement}
	 */
	const video = document.querySelector("#video");

	/**
	 * This variable stores the main-image
	 * @type {HTMLElement}
	 */
	const main_image = document.querySelector("#main-image");


    /* EventListeners
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
	main_image && main_image.addEventListener("click", showModal);
	modal && modal.addEventListener("click", closeModal);


    /* Functions
    –––––––––––––––––––––––––––––––––––––––––––––––––– */
	/**
	 * This function shows the modal window
	 * @returns {void}
	 */
	function showModal() {
		modal.classList.add("active");
		video && video.play();
	}
	/**
	 * This function close the modal window
	 * @returns {void}
	 */
	function closeModal(e) {
		if (
			e.target.classList.contains("modal") ||
			e.target.classList.contains("fa-times-circle")
		) {
			modal.classList.remove("active");
			video && video.pause();
		}
	}
});
