document.querySelectorAll(".portfolio__tab").forEach(function (item) {
	item.addEventListener("click", function () {
		if (!item.classList.contains('active')) {
			document.querySelectorAll(".portfolio__tab").forEach(function (item) {
				item.classList.remove('active');
			});

			item.classList.add('active');
		};
	});
});
document.querySelector(".portfolio__tab").click();