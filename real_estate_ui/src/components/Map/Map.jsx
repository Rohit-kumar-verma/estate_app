import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from '../Pin/Pin'
import './map.scss'
import 'leaflet/dist/leaflet.css'

function Map({items}){
  return (
    <MapContainer center={[51.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map-container'>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(item=>(
            <Pin item={item} key={item.id}/>
        ))
}
    </MapContainer>
  )
}

export default Map
