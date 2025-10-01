const {
	loginPostService,
	registerPostService,
} = require("../../services/admin/account-admin.service");
const catchError = require("../../utils/catchError");

const login = (req, res) => {
	res.render("admin/pages/login", {
		titlePage: "Đăng nhập",
	});
};

const register = (req, res) => {
	res.render("admin/pages/register", {
		titlePage: "Đăng kí",
	});
};

const registerInitial = (req, res) => {
	res.render("admin/pages/register_initial", {
		titlePage: "Tài khoản đã được khởi tạo",
	});
};

const forgotPassword = (req, res) => {
	res.render("admin/pages/forgot_password", {
		titlePage: "Quên mật khẩu",
	});
};

const otpPassword = (req, res) => {
	res.render("admin/pages/otp_password", {
		titlePage: "Nhập mã OTP",
	});
};

const resetPassword = (req, res) => {
	res.render("admin/pages/reset_password", {
		titlePage: "Đổi mật khẩu",
	});
};

const loginPost = catchError(async (req, res) => {
	const { email, password, rememberPassword } = req.body;

	const result = await loginPostService({ email, password, rememberPassword });

	if (result.code == "error") {
		return res.json(result);
	}

	// Lưu token vào cookie
	res.cookie("tokenAdmin", result.tokenAdmin, {
		maxAge: rememberPassword ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000,
		httpOnly: true,
		sameSite: "strict",
	});
	res.json({ code: "success", message: result.message });
});

const registerPost = catchError(async (req, res) => {
	const { fullName, email, password } = req.body;
	const result = await registerPostService({ fullName, email, password });

	if (result.code == "error") {
		return res.status(400).json(result);
	}

	res.json({ code: "success", message: result.message });
});

module.exports = {
	login,
	register,
	registerInitial,
	forgotPassword,
	otpPassword,
	resetPassword,
	loginPost,
	registerPost,
};
