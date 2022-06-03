//login
const btnLogin = document.getElementById("js-btn-login");
btnLogin.onclick = function() {
    if (document.getElementById("txtaccount").value == "Vanhuy" && document.getElementById("txtpassword").value == "Vanhuy") {
        const modal = document.getElementById("modal");
        modal.style.display = `none`;
        const checkModal = document.getElementsByClassName("header__navbar-item--strong");
        if (checkModal) {
            checkModal[0].style.display = `none`;
            checkModal[1].style.display = `none`;
            const result = document.getElementById("header__navbar-user");
            result.classList.remove("header__navbar-user--disable")
        }
    } else {
        alert("Đăng nhập thất bại!");
    }
};

//logout
const logOut = document.getElementById("js-log-out");
logOut.onclick = function() {
    const checkModal = document.getElementsByClassName("header__navbar-item--strong");
    if (checkModal) {
        checkModal[0].style.display = `flex`;
        checkModal[1].style.display = `flex`;
        const result = document.getElementById("header__navbar-user");
        result.classList.add("header__navbar-user--disable")
    };
};