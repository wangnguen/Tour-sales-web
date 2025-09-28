const dashboard = (req, res) => {
	res.render("admin/pages/dashboard", { pageTitle: "Dashboard" });
};

module.exports = { dashboard };
