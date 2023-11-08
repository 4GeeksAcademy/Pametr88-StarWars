const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Character: [

			],
			Planets: [

			],
			ProPlanet: [

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
					.then(data => setStore({ Character: data.results }))
					.catch(err => console.error(err))
			},
			loadSomePlanet: () => {

				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ Planets: data.results }))
					.catch(err => console.error(err))
			},
			loadPropertyPlanet: () => {

				fetch("https://www.swapi.tech/api/planets/:id/")
					.then(res => res.json())
					.then(data => setStore({ ProPlanet: data.result }))
					.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
