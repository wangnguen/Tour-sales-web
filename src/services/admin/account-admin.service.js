const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AccountAdmin = require("../../models/admin-account.model");

const loginPostService = async ({ email, password, rememberPassword }) => {
	const existAccount = await AccountAdmin.findOne({ email, deleted: false });
	if (!existAccount) {
		return {
			code: "error",
			message: "Email không tồn tại trong hệ thống!",
		};
	}

	const isPasswordValid = await bcrypt.compare(password, existAccount.password);
	if (!isPasswordValid) {
		return { code: "error", message: "Mật khẩu không đúng !" };
	}

	if (existAccount.status !== "active") {
		return { code: "error", message: "Tài khoản chưa được kích hoạt !" };
	}

	// Tạo JWT
	const tokenAdmin = jwt.sign(
		{ id: existAccount.id, email: existAccount.email },
		process.env.JWT_SECRET_ADMIN,
		{ expiresIn: rememberPassword ? "30d" : "1d" },
	);

	return {
		code: "success",
		message: "Đăng nhập thành công !",
		tokenAdmin,
	};
};

module.exports = { loginPostService };
