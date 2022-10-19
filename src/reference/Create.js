import useFetch from "./useFetch";
import {useState} from "react";
import { useNavigate as useHistory } from "react-router-dom";

const Create = () => {
    //const {body, author, isPending } = useFetch('http://localhost:8000/blogs');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history('/');
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label className={'dark:text-white'}>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className={'dark:text-white'}>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className={'dark:text-white'}>Blog author:</label>
                <input
                    className={'dark:backdrop-blur-2xl'}
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                {/*{isPending && <button disabled>Adding Blog...</button>}*/}
            </form>
        </div>
    );
}

export default Create;