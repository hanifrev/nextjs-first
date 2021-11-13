import Item from "./item"

const List = ({ list }) => {
    return (
        list.map(item => <Item key={item.objectID} item={item} />)
    )
}

export default List