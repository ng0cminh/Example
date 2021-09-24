/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import HeaderCard from "../Widgets/HeaderCard";


const PostCard = ({post}) => {
    return(
        <div className="card">
            <article className="article">
                <HeaderCard />
                <div className="article-main">
                    <figure className="article-figure img-fluid">
                        <img 
                            src="/images/default/article.jpg"
                            alt="Banner Default"
                        />
                    </figure>
                    <div className="article-content">
                        <h2 className="article-title">
                            <Link href="#">
                                <a>Tiêu đề</a>
                            </Link>
                        </h2>
                        <p>
                            giới thiệu chi tiết về bài viết
                        </p>
                    </div>
                </div>
                <footer className="article-footer">
                    <span><a href="#">Bình luận</a></span>
                    <span><a href="#">Xem</a></span>
                </footer>
            </article>
        </div>
    )
}

export default PostCard;
