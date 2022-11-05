import { Grid, Link, Spacer, User } from '@nextui-org/react';
import React, { FC } from 'react'
import { IGithubUser } from '../../../interfaces/github-user';

interface IGithubUserProps {
    user: IGithubUser;
}

const GithubUser: FC<IGithubUserProps> = ({ user }) => {
    return (
        <Grid xs={6} sm={4} >
            <Link
                href={user.html_url}
                target='_blank'
                aria-labelledby='link-url'>
                <User
                    src={user.avatar_url}
                    name={user.login}
                />
            </Link>
            <Spacer y={1} />
        </Grid>
    )
};

export default GithubUser;
