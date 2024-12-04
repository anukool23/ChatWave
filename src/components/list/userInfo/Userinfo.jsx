import './userInfo.css'

const Userinfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="./avatar.png" alt="Profile Picture" />
            <h2>Anukool Patel</h2>
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