const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokemones: [],
			pokemonesFavoritos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
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

			agregarFavoritos: (id) => {
				const repiteFavorito = getStore().pokemonesFavoritos.find((elem) => {

					return elem.id === id 
				})
			if (repiteFavorito === undefined){

				const pokemonFavorito = getStore().pokemones.find( (el) => { 
					
					return el.id === id

				} )
			
				setStore({ pokemonesFavoritos: [...getStore().pokemonesFavoritos, pokemonFavorito] })
			}
		},

			eliminarFavorito: (index) => {
				let nuevaLista = [...getStore().pokemonesFavoritos]
				nuevaLista.splice(index, 1);
				
				setStore({ pokemonesFavoritos: nuevaLista})
			}






			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});


			// }
		}
	};
};

export default getState;
