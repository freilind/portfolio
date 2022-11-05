import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Link } from "@nextui-org/react";
import { ProjectLayout } from '../../../components/layouts';
import Fquiz from '../../../components/projects/fquiz/Fquiz';

const TodoPage: NextPage = () => {
    const router = useRouter();
    return (
        <ProjectLayout title={'Fquiz'} pageDescription={'app with flutter'}>
            <Link
                aria-labelledby="go back"
                block color="secondary"
                onClick={() => router.back()} >
                [ &lt;-- Go back ]
            </Link>

            <Fquiz />
        </ProjectLayout>
    )
}

export default TodoPage;
