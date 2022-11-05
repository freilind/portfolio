import { Grid, Text } from '@nextui-org/react';
import React, { FC } from 'react';
import { SmallPokemon } from '../../../interfaces';
import PokemonCard from './PokemonCard';

interface IProps {
    pokemons: SmallPokemon[];
}

const Pokemon: FC<IProps> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} justify='flex-start'>
            <Grid xs={12} className={'font-console'} justify='center'>
                <Text
                    h2 transform='capitalize' color='primary'>
                    Pokémon API
                </Text>
            </Grid>
            {
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </Grid.Container>
    )
}

export default Pokemon;
