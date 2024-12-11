import { useUserStore } from '../../../lib/userStore'
import './userInfo.css'

const Userinfo = () => {
  const {currentUser}= useUserStore()
  return (
    <div className='userInfo'>
        <div className="user">
            <img src={currentUser.avatar ||"./avatar.png"} alt="Profile Picture" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className="icons">
            <img src="./more.png" alt="More" />
            <img src="./video.png" alt="Video" />
            <img src="./edit.png" alt="Edit" />
        </div>
    </div>
  )
}

export default Userinfo