import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Card, Container, Grid, Image, Text, Link } from "@nextui-org/react";
import { ProjectLayout } from "../../../components/layouts";
import { Pokemon, PokemonListResponse } from "../../../interfaces";
import {
  getPokemonInfo,
  getResponseApiPokemon,
} from "../../../components/projects/pokemon/Client";
import { useRouter } from "next/router";

interface IProps {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<IProps> = ({ pokemon }) => {
  const router = useRouter();
  return (
    <ProjectLayout title={pokemon.name} pageDescription={"Pokémon API"}>
      <Link
        aria-labelledby="go back"
        block
        color="secondary"
        onClick={() => router.back()}
      >
        [ &lt;-- Go back ]
      </Link>

      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} className={"font-console"} justify="center">
          <Text h2 transform="capitalize" color="primary">
            Pokémon API
          </Text>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </ProjectLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = (await getResponseApiPokemon()) as PokemonListResponse;
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    // fallback: false
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
