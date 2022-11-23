import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <h1 className='titulo'>Lançamento Favorito!</h1>

            <div className='container'>
            <iframe style={{border: '1px solid black', borderRadius: '30px'}} src="https://open.spotify.com/embed/album/5pJtcJojr98hbb6KF0ImMe?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <h2 className='titulo'>ainda vou descobrir como fazer isso funcionar</h2>
        </>
    )
}

export default Home