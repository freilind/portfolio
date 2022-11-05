import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Link } from "@nextui-org/react";
import { ProjectLayout } from '../../../components/layouts';
import ReduceText from '../../../components/projects/reduce/ReduceText';

const ReduceTextPage: NextPage = () => {
    const router = useRouter();
    return (
        <ProjectLayout title={'Reduce Text'} pageDescription={'Portfolio'}>
            <Link
                aria-labelledby="go back"
                block color="secondary"
                onClick={() => router.back()} >
                [ &lt;-- Go back ]
            </Link>
            <ReduceText />
        </ProjectLayout>
    )
}

export default ReduceTextPage;

