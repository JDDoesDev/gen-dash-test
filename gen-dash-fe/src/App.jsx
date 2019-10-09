import React from 'react';
import Header from './components/Header.jsx'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx'

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Switch>
               <Route path="/" exact component={Home} />
            </Switch>
			</div>
		);
	}
}

export default App;
