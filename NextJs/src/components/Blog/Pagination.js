const Pagination = () => {
    return (
        <nav id="pagination" className="navbars pagination">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a className='navbar-link' href="#">&lt;</a>
                </li>

                <li className="navbar-item">
                    <a className="navbar-link disabled">1</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link disabled">2</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link disabled">3</a>
                </li>

                <li className="navbar-item">
                    <a className='navbar-link' href="#">&gt;</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;