// Login Form
const loginForm = document.querySelector("#login-form");
if (loginForm) {
	const validation = new JustValidate("#login-form");

	validation
		.addField("#email", [
			{
				rule: "required",
				errorMessage: "Vui lòng nhập email của bạn!",
			},
			{
				rule: "email",
				errorMessage: "Email không đúng định dạng!",
			},
		])
		.addField("#password", [
			{
				rule: "required",
				errorMessage: "Vui lòng nhập mật khẩu!",
			},
			{
				validator: (value) => value.length >= 8,
				errorMessage: "Mật khẩu phải chứa ít nhất 8 ký tự!",
			},
			{
				validator: (value) => /[A-Z]/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một chữ cái in hoa!",
			},
			{
				validator: (value) => /[a-z]/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một chữ cái thường!",
			},
			{
				validator: (value) => /\d/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một chữ số!",
			},
			{
				validator: (value) => /[@$!%*?&]/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một ký tự đặc biệt!",
			},
		])
		.onSuccess((event) => {
			const email = event.target.email.value;
			const password = event.target.password.value;
			const rememberPassword = event.target.rememberPassword.checked;

			const dataFinal = {
				email: email,
				password: password,
				rememberPassword: rememberPassword,
			};

			fetch(`/${pathAdmin}/account-admin/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataFinal),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.code == "error") {
						alert(data.message);
					}

					if (data.code == "success") {
						window.location.href = `/${pathAdmin}/dashboard`;
					}
				});
		});
}
// End Login Form

// Register Form
const registerForm = document.querySelector("#register-form");
if (registerForm) {
	const validation = new JustValidate("#register-form");

	validation
		.addField("#fullName", [
			{
				rule: "required",
				errorMessage: "Vui lòng nhập họ tên!",
			},
			{
				rule: "minLength",
				value: 5,
				errorMessage: "Họ tên phải có ít nhất 5 ký tự!",
			},
			{
				rule: "maxLength",
				value: 50,
				errorMessage: "Họ tên không được vượt quá 50 ký tự!",
			},
		])
		.addField("#email", [
			{
				rule: "required",
				errorMessage: "Vui lòng nhập email của bạn!",
			},
			{
				rule: "email",
				errorMessage: "Email không đúng định dạng!",
			},
		])
		.addField("#password", [
			{
				rule: "required",
				errorMessage: "Vui lòng nhập mật khẩu!",
			},
			{
				validator: (value) => value.length >= 8,
				errorMessage: "Mật khẩu phải chứa ít nhất 8 ký tự!",
			},
			{
				validator: (value) => /[A-Z]/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một chữ cái in hoa!",
			},
			{
				validator: (value) => /[a-z]/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một chữ cái thường!",
			},
			{
				validator: (value) => /\d/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một chữ số!",
			},
			{
				validator: (value) => /[@$!%*?&]/.test(value),
				errorMessage: "Mật khẩu phải chứa ít nhất một ký tự đặc biệt!",
			},
		])
		.addField("#agree", [
			{
				rule: "required",
				errorMessage: "Bạn phải đồng ý với các điều khoản và điều kiện!",
			},
		])
		.onSuccess((event) => {
			const fullName = event.target.fullName.value;
			const email = event.target.email.value;
			const password = event.target.password.value;

			const dataFinal = {
				fullName: fullName,
				email: email,
				password: password,
			};

			fetch(`/${pathAdmin}/account-admin/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataFinal),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.code == "error") {
						alert(data.message);
					}

					if (data.code == "success") {
						window.location.href = `/${pathAdmin}/account-admin/register-initial`;
					}
				});
		});
}
// End Register Form
