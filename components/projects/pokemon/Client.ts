
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getResponseApiPokemon = async () => httpClient(`${BASE_URL}?limit=150`);

export const getPokemonInfo = async (nameOrId: string) => httpClient(`${BASE_URL}/${nameOrId}`);

export const httpClient = async (url: string) => {
    try {
        const response = await fetch(
            url,
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        return null;
    }
};

