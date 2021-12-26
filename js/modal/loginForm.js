import Modal from "./modal.js"

class LoginForm extends Modal {
    constructor(title) {
        super(title)
    }

    renderModalBody() {
        this.content = `
		  	<div class="modal-body text-left">
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter your email" />
					<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input type="password" class="form-control" id="inputPassword" placeholder="Enter your password" />
				</div>
 			</div>
		 `
        return this.content
    }

    renderBtn() {
        const buttonHTML = `
     		<button id="login-btn" type="button" class="btn btn-primary btn-sm btn-block">LOGIN</button>
 			`
        return buttonHTML
    }
    
}

export default LoginForm

