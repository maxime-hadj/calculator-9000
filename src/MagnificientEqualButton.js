function MagnificientEqualButton(props) {
    return (
        <div className="equal-button">
            <button onClick = {props.Click} value = '=' class='operator'>=</button>
        </div>
    );
}

export default MagnificientEqualButton