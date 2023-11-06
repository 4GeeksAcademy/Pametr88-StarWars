const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Character: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomePeople: () => {

				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({Character:data.results}))
					.catch(err => console.error(err))
			}	
		}
	};
};

export default getState;
