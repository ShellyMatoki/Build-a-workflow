export default function SelectOptions({ itemList }) {
    return (
      <>
         <option></option>
        {itemList.map(itemObj => (
          <option key={itemObj.key} value={itemObj.item}>{itemObj.item}</option>
        ))}
      </>
    );
  }