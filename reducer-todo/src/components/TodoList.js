

export default function ToDoList(props) {
    const handleChange = (e, toDo) => {
        props.toggle(toDo.id, e)
    }
    return(
        <div>
            {props.toDos.map(toDo => {
                return(
                    <p>{toDo.text} 
                        <input 
                            type="checkbox"
                            name="checkbox"
                            checked={toDo.complete}
                            onChange={(e) => handleChange(e, toDo)}
                            />
                    </p>
                )
            })}
        </div>
    )
}