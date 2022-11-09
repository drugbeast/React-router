import React, {Suspense} from 'react';
import {useParams, useLoaderData, Await, Link} from 'react-router-dom';
import './Album.css';

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
                            <div className="albumTitle">{album.title}</div>
                        </div>
                        );
                    }
                }}
            </Await>

            <Await resolve={userPromise} errorElement={<div>Oops!</div>}>
                {(user) => {
                    return (
                    <div>
                        <div>Created By: <Link className="userName" to={`/users/${albumPromise.userId}`}>{user.name}</Link></div>
                    </div>
                    );
                }}
            </Await>

            <Await resolve={photosPromise} errorElement={<div>Oops!</div>}>
                {(photos) => (
                    <div className='photosBlock'>
                    {photos.map((photo) => (
                        <img src={photo.thumbnailUrl} key={photo.id} alt=""/>
                    ))}
                    </div>
                )}
            </Await>
        </Suspense>
    );
    
}

export default Users;