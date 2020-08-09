import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';



class App extends Component {
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield :''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=> this.setState({robots: users}));

}

	

	
onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value}) 
		}

	render(){
		const filterRobot=this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	if(!this.state.robots.length){
		return<h1>Loading</h1>
	}
	else{
	return(
		<div className='tc'>
			<h1>RoboFriend </h1>
			<Searchbox searchChange={this.onSearchChange } />
			<Scroll>
				<Cardlist robots={filterRobot} />
			</Scroll>
		</div>

		);
}
}
}
export default App;  