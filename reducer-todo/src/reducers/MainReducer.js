

const MainReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let toDoId = state.currentId + 1;
            return { ...state, ToDos: [...state.ToDos, {...action.payload, id: toDoId}], currentId: state.currentId + 1}
        case "CLEAR":
            let newToDos = state.ToDos.filter(toDo => toDo.complete === false)
            return { ...state, ToDos: newToDos }
        case "TOGGLE":
            let ToDos = state.ToDos.map(toDo => {
                console.log(toDo.id)
                console.log(action.payload.toDoId)
                if (toDo.id == action.payload.toDoId) {
                    console.log(toDo.complete)
                    toDo.complete = action.payload.completed
                    console.log(toDo.complete)
                }
                return toDo;
            })
            return { ...state, ToDos }
    }
}
export default MainReducer;