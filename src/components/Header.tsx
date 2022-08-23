export function Header() {
    return (
        <header
            className="header">
            <div className='flower-logo'>
                Pink Petals
            </div>
            <nav className='nav'>
                <ul>
                    <li>
                        {/* will create link to see all the flowers */}
                        All Flowers
                    </li>
                    <li>
                        {/*  all the types of flowers*/}
                        Categories
                    </li>
                    <li>
                        {/* basket */}
                        Basket
                    </li>
                </ul>
            </nav>



        </header>
    )
}