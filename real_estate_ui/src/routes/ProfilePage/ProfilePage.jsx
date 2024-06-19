import List from "../../components/List/List"
import Chat from "../../components/Chat/Chat"
import { AuthContext } from "../../context/AuthContext";
import './profilePage.scss'
import { Suspense, useContext, useEffect } from "react"
import { Await, useLoaderData } from "react-router-dom";

const ProfilePage = () => {
  const data =useLoaderData()
  const {updateUser, currentUser} = useContext(AuthContext)

  // const navigate =useNavigate()

  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Informaion</h1>
                <button>Update Profile</button>
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
                <button>Create New Post</button>
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
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
