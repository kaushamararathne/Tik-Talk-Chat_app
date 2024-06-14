import './chatlist.css';
const Chatlist = () => {
  return (
    <div className='chatlist'>
        <div className="search">
            <div className="searchbar">
                <img src="./search.png" alt="" srcset="" />
                <input type="text" placeholder='Search' />
            </div>
            <img src="./plus.png" className='add' alt="" srcset="" />
        </div>
    </div>
  );
}

export default Chatlist;