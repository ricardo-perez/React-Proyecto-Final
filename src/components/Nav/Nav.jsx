export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/carrito'}>Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};
