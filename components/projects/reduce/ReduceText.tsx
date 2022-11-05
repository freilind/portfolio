import React, { FC, useEffect, useState, useCallback } from "react";
import {
  Button,
  Grid,
  Spacer,
  Text,
  Textarea,
  Container,
  FormElement,
} from "@nextui-org/react";

interface IObject {
  [key: string]: number;
}

const ReduceText: FC = () => {
  const [text, setText] = useState(initialText);
  const [resultChar, setResultChar] = useState({});
  const [resultWord, setResultWord] = useState({});

  const reduce = useCallback(
    (regex: string | RegExp) => {
      return text
        .toLocaleUpperCase()
        .split(regex)
        .sort()
        .reduce((prev: IObject, curr: string) => {
          if (prev[curr]) {
            prev[curr] += 1;
          } else {
            prev[curr] = 1;
          }
          return prev;
        }, {});
    },
    [text]
  );

  const reduceChar = useCallback(() => {
    setResultChar(reduce(""));
  }, [reduce]);

  const reduceWord = useCallback(() => {
    setResultWord(reduce(/[ \n]/));
  }, [reduce]);

  useEffect(() => {
    reduceChar();
    reduceWord();
  }, [reduceChar, reduceWord]);

  const reset = () => {
    setText(initialText);
  };

  const onChangeTextarea = (event: React.ChangeEvent<FormElement>) => {
    setText(event.target.value);
  };

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} className={"font-console"} justify="center">
        <Text h2 transform="capitalize" color="primary">
          Reduce Text
        </Text>
      </Grid>
      <Grid xs={12} sm={12} direction="column">
        <Textarea
          aria-labelledby="text-area"
          onChange={onChangeTextarea}
          color="primary"
          rows={10}
          minRows={10}
          maxRows={60}
          bordered={true}
          fullWidth={true}
          value={text}
        />
        <Spacer y={0.5} />
        <Grid.Container gap={0.5}>
          <Grid>
            <Button
              aria-labelledby="reset"
              auto
              flat
              size="sm"
              onClick={() => reset()}
            >
              Reset
            </Button>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12} sm={5} direction="row">
        <Container>
          <Text h4>Character counter</Text>
          <pre>{JSON.stringify(resultChar, null, 2)}</pre>
        </Container>
      </Grid>
      <Grid xs={12} sm={5} direction="row">
        <Container>
          <Text h4>Words counter</Text>
          <pre>{JSON.stringify(resultWord, null, 2)}</pre>
        </Container>
      </Grid>
    </Grid.Container>
  );
};

export default ReduceText;

const initialText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

WRITE your own text to get the summary of words and characters.`;
