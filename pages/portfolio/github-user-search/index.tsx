import React from 'react'
import { NextPage } from 'next';
import { ProjectLayout } from '../../../components/layouts';
import { useRouter } from 'next/router';
import { Link } from "@nextui-org/react";
import GithubSearch from '../../../components/projects/github-search/GithubSearch';

const GithubUserSearchPage: NextPage = () => {
    const router = useRouter();
    return (
        <ProjectLayout title={'Github search'} pageDescription={'Portfolio'}>

            <Link
                aria-labelledby="go back"
                block color="secondary"
                onClick={() => router.back()} >
                [ &lt;-- Go back ]
            </Link>

            <GithubSearch />
        </ProjectLayout>
    )
}

export default GithubUserSearchPage;

