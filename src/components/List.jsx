
export default function List(props) {

    function handleButtonClick(keyToDelete) {
        const updatedList = props.itemList.filter(itemObj => itemObj.key !== keyToDelete);
        props.updateItemList(updatedList);
    }

    return (
        <div>
            {props.itemList.map(itemObj => {
                return(
                    <div className="flex">
                     <input type="radio" value={itemObj.item}/>
                     <label >{itemObj.item}</label>
                     <button  onClick={()=>handleButtonClick(itemObj.key)}>Delete</button>

                    </div>

                ); 
            })}
        </div>
    );
}