function Header(props) {
    console.log(props)
    return(
        <header className="header">
            <h1>My cool website {props.jeff}</h1>
        </header>
    )
}
export default Header