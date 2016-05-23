import React from 'react'

const Content = ({ onClick, title, id, content }) => {
    return (
        <article>
            <h1>{ title }</h1>
            <p>{ content }</p>
            <button onClick={ onClick }>Click</button>
        </article>
    )
};

export default Content;