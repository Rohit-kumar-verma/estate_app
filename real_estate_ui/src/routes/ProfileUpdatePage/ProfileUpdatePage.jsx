import { useContext, useState } from "react";
import "./profileupdatepage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/Uploadwidget/UploadWidget";


function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar , setAvatar]= useState([])
  const [error , setError]= useState('')

  const navigate= useNavigate()

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)

    const {username, email, password}= Object.fromEntries(formData)

    try {
    const res =await apiRequest.put(`/user/${currentUser.id}`,{username,email,password, avatar:avatar[0]})
    updateUser(res.data)
    navigate('/profile')
      
    } catch (err) {
      console.log(err);
      setError(err.response.data.message)
    }

  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          {error&& <p>{error}</p>}
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || "../../../src/assets/favicon.png"} alt="" className="avatar" />
        <UploadWidget uwConfig={{
          cloudName:"dqfylmzrk",
          uploadPreset:"estate",
          multiple:false,
          maxImageFileSuze:2000000,
          folder:"avatarts",
        }}
        setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;