import React,{useState,useEffect} from 'react';
import Card from '../card/Card';
import axios from "axios";
import './CardContainer.css';
import Filter from '../filter/Filter';

const CardContainer = () => {
    const [sex, setSex]=useState('');
    const [pirateList, setPiratList]=useState([]);

    useEffect(()=>{
        const getPirates=async ()=>{
            const url=`${process.env.REACT_APP_API_URL}/pirates/`;
            await axios
            .get(url)
            .then((res)=>{
                setPiratList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        };
        getPirates();
    },[]);
    
    return (
        <div className="Container">
            <h2>Liste des principaux pirates</h2>
            <Filter sex={sex} setSex={setSex} />
            <div className='CardContainer'>
                {pirateList.filter((item)=>item.sex===sex||sex==="").map((pirate,index) => <Card {...pirate} key={index}/>)}
            </div>
        </div>
    )
}

export default CardContainer