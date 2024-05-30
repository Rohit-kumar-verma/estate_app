import Slider from '../../components/Slider/Slider'
import {singlePostData, userData } from '../../lib/dummydata'
import Map from '../../../src/components/Map/Map'
import './singlePage.scss'

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className='details'>
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className='info'>
            <div className='top'>
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src='../../../src/assets/pin.png'alt=''/>
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
              <img src={userData.img} alt=''/>
              <span>{userData.name}</span>
            </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
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
                  <p>Renter is responsible</p>
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/pet.png' alt=''/>
                <div className='featureText'>
                  <span>Pet Policy</span>
                  <p>Pets Allowed</p>
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/fee.png' alt=''/>
                <div className='featureText'>
                  <span>Property Fees</span>
                  <p>Must have 3x the rent in total househols income</p>
                </div>
              </div>
            </div>
            <p className='title'>Room Sizes</p>
            <div className="sizes">
              <div className="size">
                <img src='../../../src/assets/size.png' alt=''/>
                <span>80 sqft</span>
              </div>
              <div className="size">
                <img src='../../../src/assets/bed.png' alt=''/>
                <span>2 beds</span>
              </div>
              <div className="size">
                <img src='../../../src/assets/bath.png' alt=''/>
                <span>1 bathroom</span>
              </div>
            </div>
            <p className='title'>Nearby Places</p>
            <div className="listHorizontal">
            <div className="feature">
                <img src='../../../src/assets/school.png' alt=''/>
                <div className='featureText'>
                  <span>School</span>
                  <p>250m away</p>
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/bus.png' alt=''/>
                <div className='featureText'>
                  <span>Bus Stop</span>
                  <p>100m away</p>
                </div>
              </div>
              <div className="feature">
                <img src='../../../src/assets/restaurant.png' alt=''/>
                <div className='featureText'>
                  <span>Restaurant</span>
                  <p>200m away</p>
                </div>
              </div>
            </div>
            <p className='title'>Location</p>
            <div className="mapContainer">
              <Map items={[singlePostData]}/>
            </div>
            <div className="buttons">
              <button type='button'>
                <img src='../../../src/assets/chat.png' alt=''/>
                Send a Message
              </button>
              <button type='button'>
                <img src='../../../src/assets/save.png' alt=''/>
                Save the Place
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SinglePage
