import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Link } from "@nextui-org/react";
import { ProjectLayout } from '../../../components/layouts';
import Todo from '../../../components/projects/todo/Todo';

const TodoPage: NextPage = () => {
    const router = useRouter();
    return (
        <ProjectLayout title={'To do List'} pageDescription={'To Do app'}>
            <Link
                aria-labelledby="go back"
                block color="secondary"
                onClick={() => router.back()} >
                [ &lt;-- Go back ]
            </Link>

            <Todo />
        </ProjectLayout>
    )
}

export default TodoPage;
