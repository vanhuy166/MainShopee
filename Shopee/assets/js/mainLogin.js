//click button login

const showLogin = document.getElementsByClassName("js-form-login");
for (const showLogin1 of showLogin) {
    showLogin1.onclick = function() {
        const modal = document.getElementById("modal");
        modal.style.display = `flex`;
        const formRegister = document.getElementsByClassName("auth-form-register");
        formRegister[0].style.display = `none`;
        const formLogin = document.getElementsByClassName("auth-form-login");
        formLogin[0].style.display = `block`;
    };
};



//click button Register
const showRegister = document.getElementsByClassName("js-form-register");
for (const showRegister1 of showRegister) {
    showRegister1.onclick = function() {
        const modal = document.getElementById("modal");
        modal.style.display = `flex`;
        const formLogin = document.getElementsByClassName("auth-form-login");
        formLogin[0].style.display = `none`;
        const formRegister = document.getElementsByClassName("auth-form-register");
        formRegister[0].style.display = `block`;
    };
};


// click button comeback home
const backHome = document.getElementsByClassName("js-back-home");
for (const backHome1 of backHome) {
    backHome1.onclick = function() {
        const modal = document.getElementById("modal");
        modal.style.display = `none`;
    };
};