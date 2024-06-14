import './userinfo.css';
const Userinfo = () => {
  return (
    <div className='userinfo'>
      <div className="user">
        <img src="./avatar.png" alt="" srcset="" />
        <h3>Brien Smith</h3>
      </div>
      <div className="icons">
        <img src="./more.png" alt="more.png" srcset="" />
        <img src="./video.png" alt="video.png" srcset="" />
        <img src="./edit.png" alt="edit.png" srcset="" />
      </div>
    </div>
  );
}

export default Userinfo;