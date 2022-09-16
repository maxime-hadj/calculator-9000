function Save(props){
    return(
        <div className="save-button">
            <button onClick = {props.Click} value = 'Save' class='save'>Save</button>
        </div>
    )
}

export default Save