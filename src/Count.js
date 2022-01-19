
import React,{useContext} from 'react';

import {store} from './App';

function Count() {

    const [data,setData]=useContext(store);
    return <div className="card">
        <div className="card-body">
            <h3>Data length is:{data.length}</h3>
        </div>


    </div>;
}

export default Count;
