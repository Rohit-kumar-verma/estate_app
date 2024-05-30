import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({item}) => {
  return (
    <div className='card-container'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt=''/>
      </Link>
      <div className='textContainer'>
      <Link to={`/${item.id}`}><h1 className='title'>{item.title}</h1></Link>
        <p className='address'>
          <img src='../../../src/assets/pin.png' alt=''/>
          <span>{item.address}</span>
        </p>
        <p className='price'>$ {item.price}</p>
        <div className='bottom'> 
          <div className='features'>
            <div className='feature'>
              <img src='../../../src/assets/bed.png' alt=''/>
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className='feature'>
              <img src='../../../src/assets/bath.png' alt=''/>
              <span>{item.bathroom} bathroom</span>
            </div>
            </div>
          <div className='icons'>
            <div className='icon'>
              <img src='../../../src/assets/save.png' alt=''/>
            </div>
            <div className="icon">
              <img src='../../../src/assets/chat.png' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
