
import StatusForm from './components/StatusForm.jsx';
import Reset from './components/Reset.jsx';
import Header from './components/Header.jsx';

import Transition from './components/Transition.jsx';
import {useEffect, useState} from 'react';


function App() {
  const [input,setInput]=useState(null);
  
  const [itemList,updateItemList]=useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if(localValue==null)
      return [];
    return JSON.parse(localValue);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(itemList))
  },[itemList])
  

  const [name, setName] = useState('');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const [itemListTransition, updateItemListTransition] = useState(()=>{
  const localValue=localStorage.getItem("ITEMSTRAN")
  if(localValue==null)
    return [];
  return JSON.parse(localValue);
});

useEffect(()=>{
  localStorage.setItem("ITEMSTRAN",JSON.stringify(itemListTransition))
},[itemListTransition])


  function addItemToList () {
    updateItemList([...itemList,{item:input,key: Date.now() }]);
    setInput("");
  }

  function addItemToListTransition() {
      updateItemListTransition([
          ...itemListTransition,
          { item: name, From: fromValue, To: toValue, key: Date.now() }
      ]);
      setName('');
      setFromValue('');
      setToValue('');
  }



  function resetItemList ()  {
    updateItemList([]); 
    updateItemListTransition([]);
  }



  return (
    <>
      <Header/>
      <div className="menu">
        <StatusForm  onClick={addItemToList} onChange={(event) => setInput(event.target.value)} itemList={itemList} input={input} updateItemList={updateItemList}/>
        <Transition itemList={itemList} name={name} onChangetext={(event) => setName(event.target.value)} 
        onChangeFrom={(event) => setFromValue(event.target.value)}
        fromVal={fromValue} toVal={toValue} onChangeTo={(event) => setToValue(event.target.value)}
        addItemToListTransition={addItemToListTransition} itemListTransition={itemListTransition}
        updateItemListTransition={updateItemListTransition}
         />

      </div>

      <Reset onclick={resetItemList}/>
  
    </>
  );
}

export default App;
