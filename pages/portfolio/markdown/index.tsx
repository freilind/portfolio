import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Link } from "@nextui-org/react";
import { ProjectLayout } from '../../../components/layouts';
import Markdown from '../../../components/projects/markdown/Markdown';

const MarkdownPage: NextPage = () => {
    const router = useRouter();
    return (
        <ProjectLayout title={'Portfolio'} pageDescription={'Portfolio'}>

            <Link
                aria-labelledby="go back"
                block color="secondary"
                onClick={() => router.back()} >
                [ &lt;-- Go back ]
            </Link>
            <Markdown />
        </ProjectLayout>
    )
}

export default MarkdownPage;
