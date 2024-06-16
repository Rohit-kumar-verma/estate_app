import Slider from '../../components/Slider/Slider'
import Map from '../../../src/components/Map/Map'
import './singlePage.scss'
import { useLoaderData, useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { useContext, useState } from 'react'
import { AuthContext } from "../../context/AuthContext";


const SinglePage = () => {
  const navigate = useNavigate()
  
  const post=useLoaderData();
  console.log(post);
  const [saved,  setSaved]=useState(post.isSaved)
  const {currentUser} = useContext(AuthContext)

  const handleSave=async()=>{
    setSaved((prev)=>!prev)
    if(!currentUser){
      navigate("/login")
    }
    try {
      await apiRequest.post("/users/save", {postId:post.id})
    } catch (err) {
      setSaved((prev)=>!prev)
    }
  }
  return (
    <div className='singlePage'>
      <div className='details'>
        <div className="wrapper">
          <Slider images={post.images}/>
          <div className='info'>
            <div className='top'>
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src='../../../src/assets/pin.png'alt=''/>
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
              <img src={post.user.avatar} alt=''/>
              <span>{post.user.username}</span>
            </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.postDetail.desc)}}>
            </div>
          </div>
        </div>
      </div>
      <div className='features'>
          <div className="wrapper">
            <p className='title'>General</p>
            <div className="listVertical">
              <div className="feature">
                <img src='../../../src/assets/utility.png' alt=''/>
                <div className='featureText'>
                  <span>Utilites</span>
                  {
                    post.postDetail.utilities === 'owner'?
                    <p>Owner is responsible</p>:
                    <p>Tenant is responsible</p>
                  }
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/pet.png' alt=''/>
                <div className='featureText'>
                  <span>Pet Policy</span>
                  {
                    post.postDetail.pet === 'allowed'?
                    <p>Pets allowed</p>:
                    <p>Pets not allowed</p>
                  }
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/fee.png' alt=''/>
                <div className='featureText'>
                  <span>Income Policy</span>
                  <p>{post.postDetail.income}</p>
                </div>
              </div>
            </div>
            <p className='title'>Room Sizes</p>
            <div className="sizes">
              <div className="size">
                <img src='../../../src/assets/size.png' alt=''/>
                <span>{post.postDetail.size} sqft</span>
              </div>
              <div className="size">
                <img src='../../../src/assets/bed.png' alt=''/>
                <span>{post.bedroom} beds</span>
              </div>
              <div className="size">
                <img src='../../../src/assets/bath.png' alt=''/>
                <span>{post.bathroom} bathroom</span>
              </div>
            </div>
            <p className='title'>Nearby Places</p>
            <div className="listHorizontal">
            <div className="feature">
                <img src='../../../src/assets/school.png' alt=''/>
                <div className='featureText'>
                  <span>School</span>
                  <p>{post.postDetail.school> 999 ? post.postDetail.school/1000+"km": post.postDetail.school + "m"} away</p>
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/bus.png' alt=''/>
                <div className='featureText'>
                  <span>Bus Stop</span>
                  <p>{post.postDetail.bus > 999 ? post.postDetail.bus/1000 + "km": post.postDetail.bus+"m"} away</p>
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/restaurant.png' alt=''/>
                <div className='featureText'>
                  <span>Restaurant</span>
                  <p>{post.postDetail.restaurant > 999 ? post.postDetail.restaurant/1000 + "km": post.postDetail.restaurant+"m"} away</p>
                </div>
              </div>
            </div>
            <p className='title'>Location</p>
            <div className="mapContainer">
              <Map items={[post]}/>
            </div>
            <div className="buttons">
              <button type='button'>
                <img src='../../../src/assets/chat.png' alt=''/>
                Send a Message
              </button>
              <button type='button' onClick={handleSave} style={{
                backgroundColor: saved ?"#fece51":"White",
              }}>
                <img src='../../../src/assets/save.png' alt=''/>
                {saved ? "Place saved":"Save the Place"}
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SinglePage
