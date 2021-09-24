import SocialBox from "./SocialBox";

const HeaderCard = () => {
    return(
        <header className="article-header">
            <div className="author-date">
                <span className="article-author">
                        <a>
                            <img 
                                src="/images/author/admin.jpg"
                                width="120"
                                height="120"
                                alt="avatar"
                            />
                        </a>
                </span>
                <span className="article-author-time">
                    <span className="article-name-author">
                        <a href="#">Tác giả</a>
                    </span>
                    <span className="article-date"><time>1/9/2021</time></span>
                </span>
            </div>
            <SocialBox size="16" href="#" />
        </header>
    )
}

export default HeaderCard;