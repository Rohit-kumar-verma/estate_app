import React, { useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import './filter.scss'

const filter = () => {
    const [searchParams, setSearchPamas] = useSearchParams()
    const [query, setQuery]= useState({
        type:searchParams.get("type") || "",
        city:searchParams.get("city") || "",
        property:searchParams.get("property") || "",
        minPrice:searchParams.get("minPrice") || 0,
        maxPrice:searchParams.get("MaxPrice") || 10000000,
        bedroom:searchParams.get("bedroom") || 1,
        // type:searchParams.get("type") || "",
    })

    const handleChange = e=>{
        setQuery({
            ...query,
            [e.target.name]:e.target.value
        })
    }

    const handleFilter= ()=>{
        setSearchPamas(query)
    }
  return (
    <div className='filter'>
        <h1>Search results for <b>{searchParams.get("city")}</b></h1>
        <div className='top'>
            <div className="item">
                <label htmlFor='city'>Location</label>
                <input type="text" id="city" name='city' placeholder='City Location' onChange={handleChange}/>
            </div>
        </div>
        <div className="bottom">
        <div className="item">
                <label htmlFor='type'>Type</label>
                <select name="type" id="type" onChange={handleChange}>
                    <option value=''>any</option>
                    <option value=''>Buy</option>
                    <option value=''>Rent</option>
                </select>
                
            </div>
            <div className="item">
                <label htmlFor='propertu'>Property</label>
                <select name="property" id="property" onChange={handleChange}>
                    <option value=''>any</option>
                    <option value='apartment'>Apartment</option>
                    <option value='house'>House</option>
                    <option value='condo'>Condo</option>
                    <option value='land'>Land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor='minPrice'>Min Price</label>
                <input type="number" id="minPirce" name='minPrice' placeholder='any' onChange={handleChange}/>
            </div>
            <div className="item">
                <label htmlFor='maxPrice'>Max Price</label>
                <input type="number" id="maxPrice" name='maxPrice' placeholder='any' onChange={handleChange}/>
            </div>
            <div className="item">
                <label htmlFor='bedroom'>Bedroom</label>
                <input type="text" id="bedroom" name='bedroom' placeholder='any' onChange={handleChange}/>
            </div>
            <button type='button' onClick={handleFilter}>
                <img src='../../../src/assets/search.png' alt='search'/>
            </button>
        </div>
    </div>
  )
}

export default filter
