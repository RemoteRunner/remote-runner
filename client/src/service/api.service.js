//const DOMAIN = 'https://rr-test-vlada.herokuapp.com';
const DOMAIN = 'http://localhost:5000';

let myHeaders = new Headers();
myHeaders.append('Access-Control-Request-Headers','*');
myHeaders.append('Access-Control-Request-Method','*');
myHeaders.append("Access-Control-Request-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
myHeaders.append('Pragma', 'no-cache');
myHeaders.append('Cache-Control','no-cache, no-store, must-revalidate');
myHeaders.append('Content-Type', 'application/json');


class ApiService {
  login(user_name, password) {
    let params = {method: 'GET', mode: 'cors', headers: myHeaders};

    return fetch(new Request(DOMAIN + `/api/login?user_name=${user_name}&password=${password}`, params))
    .then((resp) => {
    	return resp.json();
    }) // Transform the data into json
  }

  register(newUser) {
  	let params = {method: 'POST', body: JSON.stringify(newUser), mode: 'cors',headers: myHeaders};
  	
  	return fetch(new Request(DOMAIN + '/api/register', params))
  }

  updateUser(user) {
  	let params = {method: 'PUT', body: JSON.stringify(user), mode: 'cors',headers: myHeaders};
  	
  	return fetch(new Request(DOMAIN + '/api/user-settings', params))
  }

  getWidgets() {
  	let params = {method: 'GET', mode: 'cors', headers: myHeaders};

    return fetch(new Request(DOMAIN + `/api/widgets`, params))
    .then((resp) => {
    	return resp.json();
    })
  }

  getWidgetCommands(widgetId) {
  	let params = {method: 'GET', mode: 'cors', headers: myHeaders};

    return fetch(new Request(DOMAIN + `/api/commands`, params))
    .then((resp) => {
    	return resp.json();
    })
  }

  sendCommand(command) {
  	console.log(command);
  	let params = {method: 'POST', body: JSON.stringify(command), mode: 'cors',headers: myHeaders};
  	
  	return fetch(new Request(DOMAIN + '/api/execute-command-ui', params))
  }

  getUserJournal(user_id) {
    let params = {method: 'GET', mode: 'cors', headers: myHeaders};

    return fetch(new Request(DOMAIN + `/api/journal?user_id=${user_id}`, params))
    .then((resp) => {
    	return resp.json();
    }) // Transform the data into json
  }
}

export default new ApiService();



