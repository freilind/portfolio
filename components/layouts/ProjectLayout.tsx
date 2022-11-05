import Head from "next/head"
import { FC, PropsWithChildren } from "react";
import Footer from "../footer";
import { ILayout } from "../../interfaces";


export const ProjectLayout: FC<PropsWithChildren<ILayout>> = ({ children, title, pageDescription, imageFullUrl }) => {
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

            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}