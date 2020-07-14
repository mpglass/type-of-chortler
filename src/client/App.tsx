import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './views/Home';
import Details from './views/Details';
import Admin from './views/Admin';
import Compose from './views/Compose';

class App extends React.Component<IAppProps, IAppState> {
	render() {
		return (
			<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/compose" component={Compose} />
				<Route exact path="/details/:chortleid" component={Details} />
				<Route exact path="/admin/:chortleid" component={Admin} />
			</Switch>
			</BrowserRouter>
		);
	}
}

export interface IAppProps {}

export interface IAppState {}

export default App;


fetch('api/chortles', {
	method: 'POST', 
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		name: 'Luke',
		text: 'does it work?'
	})
})
.then((res) => res.json())
.then((woot) => console.log(woot.msg));


// fetch getChortles() {

// 	  type: "GET",
// 	  url: "/api/chortles/",
// 	}).then((chortles) => displayChortles(chortles));
//   }
  
//   function displayChortles(chortles) {
// 	  $('#chortles').empty();
// 	chortles.forEach((chortle) => {
// 	  $("#chortles").append(`
// 		  <div className="col-md-8">
// 			  <div className="card my-2 shadow">
// 				  <div className="card-header">
// 					  <p className="header-text">@${chortle.username}</p>
// 				  </div>
// 				  <div className="card-body">
// 					  <p className="card-text">${chortle.mewsing}</p>
// 					  <div class="d-flex justify-content-between">
// 						  <button onclick="editChortle('${chortle.id}', '${chortle.username}', '${chortle.mewsing}' )" class="btn btn-outline-info">Edit</button>
// 						  <button onclick="deleteChortle(${chortle.id})" class="btn btn-outline-danger">Delete</button>
// 					  </div>
// 				  </div>
// 			  </div>
// 		  </div>
// 		  `);
// 	});
//   }
  
//   getChortles();
//   displayChortles();
  
//   function deleteChortle(id) {
// 	  $.ajax({
// 		  type: 'DELETE',
// 		  url: `/api/chortles/destroy/${id}`
// 	  })
// 	  .then(resp => {
// 		  console.log(resp.msg)
// 		  getChortles();
// 	  })
// 	  .catch(e => console.log(e));
//   }