

export default function ToDoList(props) {

    return(
        <div>
            {props.toDos.map(toDo => {
                return(
                    <p>{toDo.text} 
                        <input 
                            type="checkbox"
                            name="checkbox"
                            checked={toDo.completed}
                            onChange={() => props.toggle()}
                            value={toDo.completed}
                            />
                    </p>
                )
            })}
        </div>
    )
}