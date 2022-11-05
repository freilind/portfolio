import React, { FC, useState } from 'react';
import { Button, Grid, Spacer, Text, Textarea, Container, FormElement } from '@nextui-org/react';
import ReactMarkdown from 'react-markdown';


const Markdown: FC = () => {
    const [text, setText] = useState(initialText);

    const reset = () => {
        setText(initialText);
    }

    const onChangeTextarea = (event: React.ChangeEvent<FormElement>) => {
        setText(event.target.value);
    }

    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} className={'font-console'} justify='center'>
                <Text
                    h2 transform='capitalize' color='primary'>
                    Mark Down
                </Text>
            </Grid>
            <Grid xs={12} sm={6} direction='column'>
                <Textarea
                    aria-labelledby="text-area"
                    onChange={onChangeTextarea}
                    color='primary'
                    rows={20}
                    minRows={20}
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
                            auto flat
                            size="sm"
                            onClick={() => reset()}>
                            Reset
                        </Button>
                    </Grid>
                </Grid.Container>
            </Grid>
            <Grid xs={12} sm={6} direction='row'>
                <Container>
                    <ReactMarkdown >
                        {text}
                    </ReactMarkdown>
                </Container>
            </Grid>
        </Grid.Container>
    )
}

export default Markdown;


const initialText = `# Markdown preview
## Test your md

***For the line break add 2 spaces at the end***.  
1. This is **bold text**
2. This is *italic text*
3. This is ***bold and italic text***

> A blockquote would look great.

\`\`\`\`
$ echo Hi!
$ sudo rm -rf /
\`\`\`\`
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).`;

