import React, {Suspense} from 'react';
import {useParams, useLoaderData, Await} from 'react-router-dom';

export const loader = async ({params: {id}}) => {
    const albumPromise = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then(response => response.json());

    const userPromise = await fetch(`https://jsonplaceholder.typicode.com/users/${albumPromise.userId}`)
    .then(response => response.json());

    const photosPromise = fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
    .then(response => response.json());

    return {userPromise, albumPromise, photosPromise};
}

function Users() {
    const {id} = useParams();
    const {userPromise, albumPromise, photosPromise} = useLoaderData();
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <h1>&nbsp;</h1>
            <Await resolve={albumPromise} errorElement={<div>Oops!</div>}>
                {(album) => {
                    if (album.id == id) {
                        return (
                        <div>
                            <div>{album.title}</div>
                        </div>
                        );
                    }
                }}
            </Await>

            <Await resolve={userPromise} errorElement={<div>Oops!</div>}>
                {(user) => {
                    return (
                    <div>
                        <div>Created By: {user.name}</div>
                    </div>
                    );
                }}
            </Await>

            <Await resolve={photosPromise} errorElement={<div>Oops!</div>}>
                {(photos) => (
                    <div>
                    {photos.map((photo) => (
                        <img src={photo.url} key={photo.id} alt=""/>
                    ))}
                    </div>
                )}
            </Await>
        </Suspense>
    );
    
}

export default Users;