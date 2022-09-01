import { useState } from "react";
import style from "../../css/theme.module.css";

const ItemList = ({items, classProp, delEvent}) => {
    if (!items)
        return (<><ul></ul></>);

    const delitem = (index) => {
        delEvent(index);
    }

    const itemsJSX = items.map((item, index) => {
        return <ListItem key={index} classProp={classProp['item']} item={item} index={index} delEvent={delitem}/>
    })
    
    return (
        <ul className={classProp['list']}>
            {itemsJSX}
        </ul>
    )
}

const ListItem = ({classProp, item, index, delEvent}) => {
    const [hide, setHide] = useState(true);

    return (
        <li onMouseOver={() => setHide(false)} onMouseOut={() => setHide(true)}
            key={index} className={classProp}>
            {item}
            <button hidden={hide} onClick={(e) => {e.preventDefault();delEvent(index)}}
             className={ style.small_delete_button + " btn btn-close btn-sm"}>

             </button>
        </li>
    )
}

export default ItemList