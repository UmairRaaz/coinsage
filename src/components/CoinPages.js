import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
const CoinPages = (props) => {
    const [active, setactive] = useState(1)
    let items = [];
    for (let number = 1; number <= 100; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className='pageScroll' >
            {items.map((data, index) => <Pagination onClick={() => {
                props.setHandlePage(data.key)
                setactive(index+1)
            }}>{data}</Pagination>)}
        </div>
    )
}

export default CoinPages