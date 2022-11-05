import React from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/react";
import { ProjectLayout } from "../../../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../../../interfaces";
import Pokemon from "../../../components/projects/pokemon/Pokemon";
import { getResponseApiPokemon } from "../../../components/projects/pokemon/Client";

interface IProps {
  pokemons: SmallPokemon[];
}

const PokemonPage: NextPage<IProps> = ({ pokemons }) => {
  const router = useRouter();
  return (
    <ProjectLayout title={"Pokémon API"} pageDescription={"Pokémon API"}>
      <Link
        aria-labelledby="go back"
        block
        color="secondary"
        onClick={() => router.back()}
      >
        [ &lt;-- Go back ]
      </Link>

      <Pokemon pokemons={pokemons} />
    </ProjectLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getResponseApiPokemon()) as PokemonListResponse;

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default PokemonPage;
