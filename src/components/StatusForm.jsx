import {useState} from 'react';
import List from './List'

export default function StatusForm({itemList,input,updateItemList,onChange,onClick}){



    return (
        <div className='statusF' >
        <h3>Add status</h3>
        <div >
            <input type='text' value={input} onChange={onChange} />
            <button onClick={onClick} className='status-button'>ADD</button>
        </div>
        <List itemList={itemList} updateItemList={updateItemList} />
        </div>
    );
}

   /* const [input,setInput]=useState(null);
    const [itemList,updateItemList]=useState([]);

    function onChangeHandler(event){
        setInput(event.target.value);
    }
    function addItemToList () {
        updateItemList([...itemList,{item:input,key: Date.now() }]);
        setInput("");
    }
    
*/