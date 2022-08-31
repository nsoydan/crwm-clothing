
import './categories.style.scss';
 
function App() {
  const categories=[
    {
      id:1,
      title:'Hats',
      imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id:2,
      title:'Jackets',
      imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id:3,
      title:'Sneakers',
      imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id:4,
      title:'Womens',
      imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id:5,
      title:'Mens',
      imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
    },
  ]

  return (
    <div className='categories-container'>
      { categories.map(({title,id,imageUrl})=>(
        <div  className='category-container'>
          <div  key={id}
          className='background-image'
          style={{backgroundImage:`url(${imageUrl})`}} />  {/*object destructuring ${imageUrl}*/}
            <div  className='category-body-container'>

              <h2 key={id}>{title}</h2>
              <p >Shop Now</p>
            </div>
          </div>
      
        ))}
    </div>  
  );
}

export default App;
