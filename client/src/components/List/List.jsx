import Card from '../Card/Card'
// import { listData } from '../../lib/dummydata'
import './list.scss'

const List = ({posts}) => {
  return (
    <div className='list'>
        {posts.map(item=>(
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default List
