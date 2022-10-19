import {Link} from "react-router-dom";

const BlogList = ({ blogs, title/*, handleDelete*/ }) => {
    // const blogs = props.blogs;
    // const title = props.title;



    return (
        <div className="blog-list">
            <h2 className={'dark:text-white'}>{ title }</h2>
            {blogs.map((blog) => (
                /*<div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className={'text-3xl font-bold underline'}>{ blog.title }</h2>
                        <p className={'dark:text-slate-400'}>Written by { blog.author }</p>
                    </Link>

                </div>*/
                <div className="pt-6 pb-12 " key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <div id="card" className="">
                        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2 hover:shadow-lg">
                                <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">{ blog.title }</h2>

                                {/*<div className="h-64 w-auto md:w-1/2">
                                <img className="inset-0 h-full w-full object-cover object-center" :src="card.img" />
                            </div>*/}
                                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                    <h3 className="font-semibold text-lg leading-tight truncate">{ blog.author }</h3>
                                    {/*<p className="mt-2">
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    </p>*/}
                                    <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                        { blog.body }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>


            ))}
        </div>
    );
}

export default BlogList;