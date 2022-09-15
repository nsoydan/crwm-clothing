import DirectoryItem from '../directory-item/directory-item';
import '../directory/directory.styles.scss';

const Directory = ({categories})=>{
  console.log("Directory component çalıştı");

    return (
    <div className='directory-container'>
      { categories.map((category)=>(
        <DirectoryItem key={category.id} category={category}/>
        ))}
    </div> 
    )
}

export default Directory