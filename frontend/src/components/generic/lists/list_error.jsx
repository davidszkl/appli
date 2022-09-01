const ListError = ({errors}) => {
    const listItems = Object.keys(errors).map((key, i) => {
        return <li key={i}>
            {key} {errors[key][0] === "This field is required." ? " is required" : errors[key][0]}
            </li>
    })
    return (
        <ul style={{listStyleType: "none"}}>
            {listItems}
        </ul>
    );
}

export default ListError