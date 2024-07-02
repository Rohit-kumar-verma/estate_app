import List from "../../components/List/List"
import Chat from "../../components/Chat/Chat"
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import './profilePage.scss'
import { Suspense, useContext } from "react"
import { Await, useLoaderData } from "react-router-dom";

const ProfilePage = () => {
  const data =useLoaderData()
  console.log(data);
  const {updateUser, currentUser} = useContext(AuthContext)

  // const navigate =useNavigate()

  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Informaion</h1>
                <Link to="/profile/update"><button>Update Profile</button></Link>
            </div>
            <div className="info">
                <span>
                    Avatar: 
                    <img src={currentUser.avatar || '../../../src/assets/favicon.png'} alt=''/>
                </span>
                <span>Username: <b>{currentUser.username}</b></span>
                <span>E-mail: <b>{currentUser.email}</b></span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <Link to="/add"><button>Create New Post</button></Link>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
              <Await resolve={data.postResponse}
              errorElement={
                <p>No posts</p>
              }>
                {(postResponse)=>
                <List posts={postResponse.data.userPosts}/>
                }
              </Await>
            </Suspense>
            <div className="title">
                <h1>Saved List</h1>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
              <Await resolve={data.postResponse}
              errorElement={
                <p>No posts</p>
              }>
                {(postResponse)=>
                <List posts={postResponse.data.savedPosts}/>
                }
              </Await>
            </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
        <Suspense fallback={<p>Loading...</p>}>
              <Await resolve={data.chatResponse}
              errorElement={
                <p>No chats</p>
              }>
                {data.lenth>0?(chatResponse)=>
                <Chat chats={chatResponse.data}/>
                :""
                }
              </Await>
            </Suspense>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
