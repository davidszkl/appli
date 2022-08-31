import { useState } from "react";
import style from "../css/theme.module.css"

const ItemList = ({items, classProp, delEvent}) => {
    const [show, setshow] = useState();

    if (!items)
        return (<><ul></ul></>);

    const delitem = (index) => {
        delEvent(index);
    }
 
    const itemsJSX = items.map((item, index) => {
        return <li onMouseOver={() => showbutton(index)} onMouseOut={() => hidebutton(index)}
                key={index} className={classProp['item']}>{item}
                    <button key={index} hidden={true} onClick={() => {delitem(index)}} className={ style.small_delete_button + " btn btn-close btn-sm"}>
                        
                    </button>
                </li>
    });

    const showbutton = (index) => {
        console.log(itemsJSX[index].props.children[1].props['hidden']);
        itemsJSX[index].props.children[1].props['hidden'] = false;
    }

    const hidebutton = (index) => {
        setshow(false);
    }

    return (
        <ul className={classProp['list']}>
            {itemsJSX}
        </ul>
    )
}

export default ItemList