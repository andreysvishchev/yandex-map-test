'use client'

import {useEffect, useState} from "react";

const Map = () => {
    const [init, setInit] = useState(false)
    useEffect(() => {
        if (!init) {
            let myMap
            // @ts-ignore
            myMap = new ymaps.Map('map', {
                center: [55.76, 37.64], // Москва
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            });

            setInit(true)
        }

    }, [init]);


    return (
        <div style={{width: 300, height: 300}} id={'map'}>

        </div>
    );
};

export default Map;