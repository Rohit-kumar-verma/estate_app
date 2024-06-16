import React, { Suspense } from 'react'
import Filter from '../../components/Filter/Filter' 
import Card from '../../components/Card/Card'
import Map from '../../components/Map/Map'
import './listpage.scss'
import { Await, useLoaderData } from 'react-router-dom'

const listPage = () => {

  // const data = listData
  const data =useLoaderData()
  console.log(data.postResponse);
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className="wrapper">
            <Filter/>
              {/* {posts.length!==undefined && posts.map(item=>(
                  <Card key={item.id} item={item}/>
              ))
            } */}
            <Suspense fallback={<p>Loading...</p>}>
              <Await resolve={data.postResponse}
              errorElement={
                <p>No posts</p>
              }>
                {(postResponse)=>postResponse.data.map(
                  post=>(
                    <Card key={post.id} item={post}/>
                  )
                )
                }
              </Await>
            </Suspense>
        </div>
      </div>
      <div className='mapContainer'>
        <Suspense fallback={<p>Loading...</p>}>
              <Await resolve={data.postResponse}
              errorElement={
                <p>No data</p>
              }>
                {(postResponse)=>
                <Map items={postResponse.data}/>
                }
              </Await>
            </Suspense>
      </div>
    </div>
  )
}
 
export default listPage
