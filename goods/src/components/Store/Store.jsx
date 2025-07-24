import { useState } from 'react'
import { CardsView } from '../Cards/CardsView'
import { ListView } from '../List/ListView'
import {  FaThList,FaThLarge } from 'react-icons/fa';
import S from './Store.module.css'

const products = [{
    id: 1,
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    id: 2,
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    id: 3,
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    id: 4,
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    id: 5,
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    id: 6,
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

export const Store =()=> {
    const [state, setState]= useState(false)

    const handleClickIcons = ()=> {
        setState(!state);
        console.log(state);
    }

    return ( 

        <div className={S.container}>

            <div className={S.boxIcone}>
                <div 
                    className={S.icone}
                    onClick={handleClickIcons}> 
                    { state ? <FaThLarge style={{fontSize: '90px'}}/> : <FaThList style={{fontSize: '90px'}}/>}
                </div>
            </div >  

            { state ? <CardsView products={products}/> : <ListView products={products}/>}

        </div>
    )
}