import Element from "./element.js"
import LoginForm from "./modal/loginForm.js"

class Header extends Element {
    constructor() {
        super()
        this.loginBtnHendler = this.loginBtnHendler.bind(this)
        this.logoutPage = this.logoutPage.bind(this)
        this.renderHeader()
        this.render()
    }

    renderHeader() {
        this.header = this.createElement("header", ["card-header"])
        this.header.insertAdjacentHTML(
            "afterbegin",
            `<a href="https://www.medcentre.com.ua/clinics/">
                <img class="logo" src="./img/logo.png" alt="logo" />
            </a>`
        )
        const btnWrapper = this.createElement("div", ["btn-box"])
        this.createVisitBtn = this.createElement("button", ["btn", "btn-outline-info", "d-none"], "Create visit") //, "d-none"
        this.loginBtn = this.createElement("button", ["btn", "btn-with-img", "btn-outline-primary"], "Login")
        this.header.append(btnWrapper)
        btnWrapper.append(this.loginBtn, this.createVisitBtn)
        document.querySelector("#body").prepend(this.header)
        this.getUserName()
    }

    render() {
        if (!localStorage.getItem("isLogged") || localStorage.getItem("isLogged") === "false") {
            this.authorization()
        } else if (localStorage.getItem("isLogged")) {
            this.renderVisitPage()
        }
    }

    authorization() {
        this.loginBtn.addEventListener("click", this.loginBtnHendler)
    }

    loginBtnHendler(ev) {
        ev.preventDefault()
        this.LoginForm = new LoginForm("Fill in the login form")
        this.LoginForm.show()
        this.submitLoginBtn = document.querySelector("#login-btn")
        this.submitLoginBtn.addEventListener("click", () => {
            this.mailValue = document.querySelector("#inputEmail").value
            this.passwordValue = document.querySelector("#inputPassword").value
            this.setUserName(this.mailValue)
            if (this.mailValue === "pasha@ukr.net" && this.passwordValue === "1") {
                this.renderVisitPage()
                this.LoginForm.hide()
            }
        })
    }

    setUserName(value) {
        let userName = value.split("@")
        userName = userName[0].toString()
        localStorage.setItem("user", userName)
    }

    getUserName() {
        let user = localStorage.getItem("user")
        return (this.userName = user[0].toUpperCase() + user.slice(1))
    }
    renderVisitPage() {
        this.loginBtn.innerHTML = `${this.userName}
                 <svg id="logout-icon" xmlns="http://www.w3.org/2000/svg" >
                	<path d="M3 3h8V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H3z" />
                	<path d="M19 10l-6-5v4H5v2h8v4l6-5z" />
                 </svg>`
        this.createVisitBtn.classList.remove("d-none")

        this.loginBtn.removeEventListener("click", this.loginBtnHendler)
        this.loginBtn.addEventListener("click", this.logoutPage)
        localStorage.setItem("isLogged", "true")
        localStorage.setItem("token", "fa8300f4-8841-4a0a-9692-1e323f2abb73")
    }

    logoutPage() {
        this.header.remove()
        this.renderHeader()
        this.loginBtn.removeEventListener("click", this.logoutPage)
        localStorage.setItem("isLogged", "false")
        this.render()
    }
}

export default Header