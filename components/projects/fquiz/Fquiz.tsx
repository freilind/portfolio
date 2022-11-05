import React, { FC } from 'react';
import { Grid, Spacer, Text, Link } from '@nextui-org/react';
import ReactPlayer from 'react-player';

const Fquiz: FC = () => {
    return (
        <Grid.Container gap={2} justify='center'>
            <Grid xs={12} className={'font-console'} >
                <Text
                    h2 transform='capitalize' color='primary'>
                    App with Flutter
                </Text>
            </Grid>
            <Grid xs={12} direction='column'>
                <Spacer y={0.5} />
                <Grid.Container gap={0.5} justify='center'>
                    <Grid>
                        <ReactPlayer
                            className=''
                            url='/videos/fquiz-iphone.flv'
                            width='100%'
                            height='70vh'
                            controls={true}
                        />
                    </Grid>

                </Grid.Container>
                <Grid xs={12} justify='center'>
                    <Link href="https://github.com/freilind/fquiz" target={'_blank'} role={'github'}>
                        <i className={`bx bx-md bxl-github`}>Repo</i>
                    </Link>
                </Grid>
            </Grid>
        </Grid.Container>
    )
}

export default Fquiz;


