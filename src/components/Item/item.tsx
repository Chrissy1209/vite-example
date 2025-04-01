import React, { useCallback, useEffect } from 'react';
import style from './index.module.sass';

interface ItemProps {
    name: string;
    description: string;
}

const Item: React.FC<ItemProps> = ({ name, description }) => {
    const getApi = useCallback(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => {
                const data = res.json()
                console.log(data);
            }).catch(err => console.log(err))
    }, []);

    useEffect(() => {
        getApi();
    }
    , [getApi]);

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>hi{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Item;