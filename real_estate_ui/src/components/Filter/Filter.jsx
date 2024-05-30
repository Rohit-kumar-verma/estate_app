import React from 'react'
import './filter.scss'
// import {search} from './../../src/assets'

const filter = () => {
  return (
    <div className='filter'>
        <h1>Search results for <b>London</b></h1>
        <div className='top'>
            <div className="item">
                <label htmlFor='city'>Location</label>
                <input type="text" id="city" name='city' placeholder='City Location'/>
            </div>
        </div>
        <div className="bottom">
        <div className="item">
                <label htmlFor='type'>Type</label>
                <select name="type" id="type">
                    <option value=''>any</option>
                    <option value=''>Buy</option>
                    <option value=''>Rent</option>
                </select>
                
            </div>
            <div className="item">
                <label htmlFor='propertu'>Property</label>
                <select name="property" id="property">
                    <option value=''>any</option>
                    <option value='apartment'>Apartment</option>
                    <option value='house'>House</option>
                    <option value='condo'>Condo</option>
                    <option value='land'>Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor='minPrice'>Min Price</label>
                <input type="number" id="minPirce" name='minPrice' placeholder='any'/>
            </div>
            <div className="item">
                <label htmlFor='maxPrice'>Max Price</label>
                <input type="number" id="maxPrice" name='maxPrice' placeholder='any'/>
            </div>
            <div className="item">
                <label htmlFor='bedroom'>Bedroom</label>
                <input type="text" id="bedroom" name='bedroom' placeholder='any'/>
            </div>
            <button type='button'>
                <img src='../../../src/assets/search.png' alt='search'/>
            </button>
        </div>
    </div>
  )
}

export default filter
