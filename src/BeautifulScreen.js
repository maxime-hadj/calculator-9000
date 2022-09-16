function BeautifulScreen(props){
    return(
        <div className="global-calculator">
            <div className="screen">
                <p>{props.operation}</p>
            </div>
        </div>
    )
}
export default BeautifulScreen;