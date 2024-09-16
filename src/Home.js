import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = ()=>{
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');


    // let name = "mario";

    // const [name,setName]= useState('Mario');
    // const [age,setAge] = useState(25);
    // const handleClick = ()=>{
    //     setName("luigi");
    //     setAge(99);
    // }

    // const handleClickAgain = (name,e)=>{
    //     console.log("hello" + name,e);
    // }


    //   const [name,setName] = useState('mario');

   


      
      //empty dependency array only fires the useeffect
      //function in the initial render
    return (
        <div className="home">

            {error && <div>{error}</div>}

            {isPending && <div>Loading...</div>}
            
            {blogs && <BlogList blogs = {blogs} title = "All blogs!" />}
            {/* <p>{name}</p> */}
            {/* {blogs && <button onClick={()=>setName('luigi')}>Change name</button>} */}
            {/* <BlogList blogs = {blogs.filter((blog)=> blog.author === "mario" )} title = "Mario's blogs!" handleDelete = {handleDelete}/> */}



            {/* <p>{name} is {age}</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* 
            <button onClick={(e)=>{
                handleClickAgain("moo",e.target);
            }}>click me</button> */}


        </div>
    );
}

export default Home;