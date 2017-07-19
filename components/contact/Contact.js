
import React from 'react';

class Contact extends React.Component{
	constructor(){
		super();

		this.state = {
			contactOptions : [
				{
					name: 'facebook',
					uri: 'www.facebook.com'
				},				
				{
					name: 'linkedin',
					uri: 'www.linkedin.com'
				},				
				{
					name: 'yahoo',
					uri: 'www.yahoo.com'
				},
			]
		}
	}
	render(){
		return(
			<div className="contact">
				<h1>Contact Us</h1>
				<ul>
					{ this.state.contactOptions.map((contact, i) => <li><a key={i} href={contact.uri}>contact.name</a></li>) }
				</ul>
			</div>
		);
	}
}

export default Contact;