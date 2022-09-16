function GreatOperationButton(props) {
    return (
        <div className="great-operation-button">
            <button onClick = {props.Click} value = 'AC' class='operator'>AC</button>
            <button onClick = {props.Click} value = 'DEL' class='operator'>DEL</button>
            <button onClick = {props.Click} value = '%' class='operator'>%</button>
            <button onClick = {props.Click} value = '*' class='operator'>*</button>
            <button onClick = {props.Click} value = '+' class='operator'>+</button>
            <button onClick = {props.Click} value = '-' class='operator'>-</button>
            <button onClick = {props.Click} value = '.' class='operator'>.</button>
        </div>
    );
}

export default GreatOperationButton