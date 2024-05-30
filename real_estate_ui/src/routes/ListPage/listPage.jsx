import React from 'react'
import Filter from '../../components/Filter/Filter' 
import Card from '../../components/Card/Card'
import {listData} from '../../lib/dummydata'
import Map from '../../components/Map/Map'
import './listpage.scss'

const listPage = () => {

  const data = listData
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className="wrapper">
            <Filter/>
              {data.map(item=>(
                  <Card key={item.id} item={item}/>
              ))}
        </div>
      </div>
      <div className='mapContainer'>
        <Map items={data}/>
      </div>
    </div>
  )
}
 
export default listPage
