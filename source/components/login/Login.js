
import React from 'react';
import style from './login.css'

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			actionUri: '/source/todo',
			email: '',
			password: '',
			loginBtn: 'Login'
		}

		this.updateInputState = this.updateInputState.bind(this);
	}

	updateInputState(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render(){
		return(
			<article className="login">
				<form method="post" action={this.state.actionUri}>
					<input type="email" name="email" value={this.state.email} onChange={this.updateInputState} />
					<input type="password" name="password" value={this.state.password} onChange={this.updateInputState} />
					<button>{this.state.loginBtn}</button>	
				</form>
			</article>
		);
	}
}

export default Login;