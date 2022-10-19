import useFetch from "./useFetch";
import {useParams, useNavigate as useHistory} from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const {data: blog, error, isPending} = useFetch(
        'http://localhost:8000/blogs/' + id
    );

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history('/');
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className={'dark:text-slate-400'}>Written by {blog.author}</p>
                    <div className={'dark:text-white'}>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
