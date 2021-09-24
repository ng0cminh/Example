import PostCard from "./PostCard";
import Pagination from "./Pagination";

const BlogList = ({posts}) => {
    return (
        <section id="content" className="content">
            {posts.map((post, index) => {
                    return (
                        <PostCard post={post} key={index} />
                    )
                }
            )}
            <Pagination />
        </section>
    )
}

export default BlogList;
