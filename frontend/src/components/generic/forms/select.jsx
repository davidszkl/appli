export const Select = ({optionList, name, label, classNames, onChange}) => {

    return (
        <>
            { label ? <div className={classNames['label']}>
                <label htmlFor={name} className="form-label">{label}</label>
            </div> : ""}
            <div className={classNames['input']}>
                <select name={name} className="form-control" onChange={onChange}>
                    {optionList}
                </select>
            </div>
        </>
    );
};