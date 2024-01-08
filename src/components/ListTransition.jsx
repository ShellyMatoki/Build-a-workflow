export default function ListTransition(props) {

    function deleteItemFromListTransition(key){

        const newList = props.itemListTransition.filter(itemObj=>{

            return itemObj.key!==key;
        });

        props.updateItemListTransition(newList);
    }

    return (
        <div>
            {props.itemListTransition.map(itemObj => {
                return(
                    <div className="flex">
                     <p>{itemObj.item} {itemObj.From} {itemObj.To}</p>;
                     <button  onClick={()=>deleteItemFromListTransition(itemObj.key)}>Delete</button>

                    </div>

                ); 
            })}
        </div>
    );
}