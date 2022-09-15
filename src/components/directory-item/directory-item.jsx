import './directory-item.style.scss';

const DirectoryItem =({category})=>{
    const {imageUrl,title}=category;

    return(
        <div  className='directory-item-container'>
        <div 
        className='background-image'
        style={{backgroundImage:`url(${imageUrl})`}} />  {/*object destructuring ${imageUrl}*/}
          <div  className='directory-body-container'>
            <h2 >{title.toUpperCase()}</h2>
            <p >Shop Now</p>
          </div>
        </div>
    )
};

export default DirectoryItem;