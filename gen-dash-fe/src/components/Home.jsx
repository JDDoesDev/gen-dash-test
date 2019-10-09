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
        const headers =  {
            headers: {
                Authorization: 'Bearer f86a9cd5fcaf57d48d6f0f322cf4053f26bca04ca8eb82fa242819a58e76b75d'
            }
        };
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