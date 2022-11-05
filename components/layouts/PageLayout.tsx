import { Grid, Spacer } from "@nextui-org/react";
import Head from "next/head"
import { FC, PropsWithChildren } from "react";
import SwitchTheme from "../ui/theme/SwitchTheme";
import SwitchLanguage from '../ui/theme/SwitchLanguage';
import Footer from "../footer";
import { ILayout } from "../../interfaces";


export const PageLayout: FC<PropsWithChildren<ILayout>> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />

                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head>
            <div className='bar-top'>
                <Grid.Container gap={1} justify="flex-end">
                    <Grid>
                        <SwitchLanguage />
                    </Grid>
                    <Grid>
                        <Spacer x={1} />
                    </Grid>
                    <Grid>
                        <SwitchTheme />
                    </Grid>
                </Grid.Container>
            </div>

            <main>
                <Grid.Container>
                    <Grid >
                        {children}
                    </Grid>
                </Grid.Container>
            </main>
            <Footer />
        </>
    )
}