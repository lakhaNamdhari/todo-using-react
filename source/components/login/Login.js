
import React from 'react';
import style from './login.css'
import {Link} from 'react-router-dom';

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			actionUri: '/source/todo',
			email: '',
			emailLabel: 'Email',
			password: '',
			passwordLabel: 'PIN',
			loginBtn: 'login'
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
					<input placeholder={this.state.emailLabel} type="email" name="email" value={this.state.email} onChange={this.updateInputState} />
					<input placeholder={this.state.passwordLabel} type="password" name="password" value={this.state.password} onChange={this.updateInputState} />
					<Link className="btn" to={this.state.actionUri}>{this.state.loginBtn}</Link>	
				</form>
			</article>
		);
	}
}

export default Login;