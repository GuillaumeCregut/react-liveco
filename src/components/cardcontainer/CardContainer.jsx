import React,{useState} from 'react';
import Card from '../card/Card';

import pirates from '../../datas/data';
import './CardContainer.css';
import Filter from '../filter/Filter';

const CardContainer = () => {
    const [sex, setSex]=useState('');
    return (
        <div className="Container">
            <h2>Liste des principaux pirates</h2>
            <Filter sex={sex} setSex={setSex} />
            <div className='CardContainer'>
                {pirates.filter((item)=>item.sex===sex||sex==="").map((pirate,index) => <Card {...pirate} key={index}/>)}
            </div>
        </div>
    )
}

export default CardContainer