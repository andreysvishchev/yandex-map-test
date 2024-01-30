'use client'

import {useEffect, useState} from "react";

const Map = () => {
    const [init, setInit] = useState(false)
    useEffect(() => {
        let myMap
        // @ts-ignore
        myMap = new ymaps.Map('map', {
            center: [55.76, 37.64], // Москва
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });


    }, []);


    return (
        <>

                <div style={{width: 300, height: 300}} id={'map'}>

                </div>

        </>


    );
};

export default Map;