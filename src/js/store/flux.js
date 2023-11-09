const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Character: [

			],
			Planets: [

			],
			ProPlanet: [

			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomePeople: () => {

				fetch("https://swapi.dev/api/people")
					.then(res => res.json())
					.then(data => {
						const store=getStore()
						setStore({ ...store, Character: data.results })
					})
					.catch(err => console.error(err))
			},
			loadSomePlanet: () => {

				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						const store=getStore()
						setStore({ ...store, Planets: data.results })
					})
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
