// Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-button-menu");
if (buttonMenuMobile) {
	const sider = document.querySelector(".sider");
	const siderOverlay = document.querySelector(".sider-overlay");

	buttonMenuMobile.addEventListener("click", () => {
		sider.classList.add("active");
		siderOverlay.classList.add("active");
	});

	siderOverlay.addEventListener("click", () => {
		sider.classList.remove("active");
		siderOverlay.classList.remove("active");
	});
}
// End Menu Mobile

// Header
document.addEventListener("DOMContentLoaded", function () {
	// Toggle account dropdown
	const account = document.querySelector(".inner-account");
	if (account) {
		account.addEventListener("click", function (e) {
			e.stopPropagation();
			const dropdown = this.querySelector(".account-dropdown");
			dropdown.style.display =
				dropdown.style.display === "none" ? "block" : "none";
		});
	}

	// Close dropdowns on outside click
	document.addEventListener("click", function () {
		document
			.querySelectorAll(".notify-dropdown, .account-dropdown")
			.forEach((dd) => {
				dd.style.display = "none";
			});
	});

	// Dark mode toggle
	const darkToggle = document.querySelector(".inner-dark-mode i");
	if (darkToggle) {
		darkToggle.addEventListener("click", function () {
			document.body.classList.toggle("dark-mode");
			const isDark = document.body.classList.contains("dark-mode");
			this.classList.toggle("fa-moon", !isDark);
			this.classList.toggle("fa-sun", isDark);
			this.title = isDark
				? "Chuyển sang chế độ sáng"
				: "Chuyển sang chế độ tối";
			localStorage.setItem("darkMode", isDark);
		});

		// Load from localStorage
		if (localStorage.getItem("darkMode") === "true") {
			document.body.classList.add("dark-mode");
			darkToggle.classList.remove("fa-moon");
			darkToggle.classList.add("fa-sun");
			darkToggle.title = "Chuyển sang chế độ sáng";
		}
	}
});

// End Header

// Sider
const sider = document.querySelector(".sider");
if (sider) {
	const pathNameCurrent = window.location.pathname;
	const splitPathNameCurrent = pathNameCurrent.split("/");
	const menuList = sider.querySelectorAll("a");
	menuList.forEach((item) => {
		const href = item.href;
		// console.log(item.href);
		const pathName = new URL(href).pathname;
		// console.log(pathName);
		const splitPathName = pathName.split("/");
		if (
			splitPathNameCurrent[1] == splitPathName[1] &&
			splitPathNameCurrent[2] == splitPathName[2]
		) {
			item.classList.add("active");
		}
	});
}
// End Sider
