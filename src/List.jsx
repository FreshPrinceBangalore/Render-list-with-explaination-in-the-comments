function List(props) {
    
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); to sort by Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); to sort by reverse alphabetical
    // fruits.sort((a , b ) => a.calories - b.calories) to sort by assending order by calories
    // fruits.sort((a , b) => b.calories - a.calories); to sort by decending order by calories
//    let lowcalfruits = fruits.filter(fruit => fruit.calories > 70);

    let itemList = props.items;

    let itemCategory = props.category;



    let listItems = itemList.map(item => <li key={item.id}> {item.name} :&nbsp; {item.calories}</li>);
    return (
        <>
        <h3 className="category">{itemCategory}</h3>
         <ol className="orderedL">
            {listItems}
        </ol>
        </>
       
    );
}

export default List;