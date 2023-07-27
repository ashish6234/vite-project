
function ListGroup() {

    const ListItems = [
        'Delhi',
        'Mumbai',
        'Dehradun',
        'Banglore'

    ]

  return (
<>
<h1>This is List</h1>
    <div className="list-group">
        {
            ListItems.map(ListItems => <li key={ListItems}>{ListItems}</li>)
        }
    </div>
</>
  );
}

export default ListGroup;
