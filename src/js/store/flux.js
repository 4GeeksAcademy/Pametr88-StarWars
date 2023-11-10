const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Character: [

			],
			Planets: [

			],
			Pelis: [

			],
			Especies:[

			]
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

				fetch("https://swapi.dev/api/planets")
					.then(res => res.json())
					.then(data => {
						const store=getStore()
						setStore({ ...store, Planets: data.results })
					})
					.catch(err => console.error(err))
			},
			loadSomeFilm: () => {

				fetch("https://swapi.dev/api/films")
					.then(res => res.json())
					.then(data => {
						const store=getStore()
						setStore({ ...store, Pelis: data.results })
					})
					.catch(err => console.error(err))
			},	
			loadSomeSpecie: () => {

				fetch("https://swapi.dev/api/species")
					.then(res => res.json())
					.then(data => {
						const store=getStore()
						setStore({ ...store, Especies: data.results })
					})
					.catch(err => console.error(err))
			},
		}
	};
};

export default getState;
