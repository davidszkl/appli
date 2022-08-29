const Optionlist = ({options}) => {
    return (
        options.map((option, ind) => {
            return (
                <option key={ind} name={option.name} value={option.value}>{option.value}</option>
            );
        })
    );
}

export default Optionlist