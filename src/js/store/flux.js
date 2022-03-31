const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokemones: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const store = getStore();
				fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
					.then((e) => {
						return e.json();
					}).then((e) => {
						e.results.map((pokemon) => {
							fetch(pokemon.url).then((ex) => {
								return ex.json()
							}).then((ex) => {
								setStore({ pokemones: [...store.pokemones, ex] });
							})
						});
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});


			}
		}
	};
};

export default getState;
