import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');



    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }

            {/*because null evaluates to false it doesn't execute the right side*/}
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
    );
}

export default Home;