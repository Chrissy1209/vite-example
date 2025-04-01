import React from 'react';

interface ItemProps {
    name: string;
    description: string;
}

const Item: React.FC<ItemProps> = ({ name, description }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>hi{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Item;