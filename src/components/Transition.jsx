
import {useState} from 'react';
import SelectOptions from './SelectOptions'; 
import ListTransition from './ListTransition';

/*
export default function Transition({ itemList }) {
    const [name, setName] = useState('');
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [itemListTransition, updateItemListTransition] = useState([]);

    function addItemToListTransition() {
        updateItemListTransition([
            ...itemListTransition,
            { item: name, From: fromValue, To: toValue, key: Date.now() }
        ]);
        setName('');
        setFromValue('');
        setToValue('');
    }

    return (
        <div>
            <h3>Add transition </h3>
            <label > name:</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label > From:</label>
            <select value={fromValue} onChange={(event) => setFromValue(event.target.value)}>
                <SelectOptions itemList={itemList} />
            </select>
            <label >To:</label>
            <select value={toValue} onChange={(event) => setToValue(event.target.value)}>
                <SelectOptions itemList={itemList} />
            </select>
            <button onClick={addItemToListTransition} className='transition-button'>ADD</button>
            <ListTransition itemListTransition={itemListTransition} updateItemListTransition={updateItemListTransition}  />
        </div>
    );
}

*/
export default function Transition({ itemList,name,onChangetext,fromVal,onChangeFrom,toVal,onChangeTo,addItemToListTransition,
    itemListTransition,updateItemListTransition}) {
  

    return (
        <div>
            <h3>Add transition </h3>
            <label > name:</label>
            <input type='text' value={name} onChange={onChangetext} />
            <label > From:</label>
            <select value={fromVal} onChange={onChangeFrom}>
                <SelectOptions itemList={itemList} />
            </select>
            <label >To:</label>
            <select value={toVal} onChange={onChangeTo}>
                <SelectOptions itemList={itemList} />
            </select>
            <button onClick={addItemToListTransition} className='transition-button'>ADD</button>
            <ListTransition itemListTransition={itemListTransition} updateItemListTransition={updateItemListTransition}  />
        </div>
    );
}
