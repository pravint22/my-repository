import PropTypes from 'prop-types';

function List(props){
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    // fruits.sort((a,b) => a.calories - b.calories);
    // fruits.sort((a,b) => b.calories - a.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    const itemList = props.item;

    const listItems = itemList.map(
        item => (<li key={item.id}>
                    {item.name}: &nbsp;
                    <b>{item.calories}</b>
                </li>
        ))

    return(
        <div>
            <h3 className="list-category">{props.category}</h3>
            <ol className="list-items"> {listItems} </ol>
         </div>
    )
}

List.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired,
    category: PropTypes.string.isRequired
};
List.defaultProps = {
    category: "Category",
    item: []
}
export default List;