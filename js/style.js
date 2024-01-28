const btn = document.getElementById("form-input");
const right_Username = "namle";
const right_Password = "namle123";
btn.addEventListener("submit", function (e) {
    e.preventDefault();
    const Username = document.getElementById("email_input").value;
    console.log("email",Username);
    const Password = document.getElementById("password_input").value;
    if (right_Password == Password && right_Username == Username) {
        alert("Đăng Nhập Thành Công")
    }
    else {
        alert("Đăng Nhập Không Thành Công")
    }
})