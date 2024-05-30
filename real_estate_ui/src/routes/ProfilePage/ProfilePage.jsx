import List from "../../components/List/List"
import Chat from "../../components/Chat/Chat"
import './profilePage.scss'

const ProfilePage = () => {
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
                    <img src='../../../src/assets/favicon.png' alt=''/>
                </span>
                <span>Username: <b>John dove</b></span>
                <span>E-mail: <b>john@gmail.com</b></span>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
            <List/>
            <div className="title">
                <h1>Saved List</h1>
            </div>
            <List/>
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
