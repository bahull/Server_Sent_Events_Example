import React, { useEffect, useState } from 'react';

const EventSourcer = ({ src }) => {
    const [message, setMessage] = useState("")
    useEffect(() => {
        setMessage('No one is watching yet!')
        const source = new EventSource(src);
        source.onmessage = event => {
            console.log('event: ', event);
            setMessage(event.data)
            
        }
        source.onopen = open => {
            console.log('open: ', open);

        }

        source.onerror = error => {
            console.log('error: ', error);

        }
    }, [])
    return <div>
            <h1>Here I am sourcing stuff!</h1>
            <p>{message}</p>
    </div>
}

export default EventSourcer

