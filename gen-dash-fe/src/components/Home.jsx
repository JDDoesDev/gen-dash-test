import React from 'react';
import '../styles/Home.scss'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            workspaces: null
        }
    }
    componentDidMount() {
        // fetch('https://cors-anywhere.herokuapp.com/https://api.mavenlink.com/api/v1/workspaces', headers)
        // .then(res => {
        //     if (res.status >= 400) {
        //         throw new Error("Bad response from servers");
        //     }
        //     return res.json();
        // })
        // .then(data => {
        //     this.state.workspaces = data;
        //     console.log(this.state.workspaces)
        // })
        // .catch(err => {
        //     console.log(err)
        // });
    }
	render() {
		return (
			<div>
                <h3>this is the home page</h3>
			</div>
		);
	}
}

export default Home;