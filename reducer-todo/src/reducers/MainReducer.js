

const MainReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let toDoId = state.currentId + 1;
            return { ...state, ToDos: [...state.ToDos, {...action.payload, id: toDoId}], currentId: state.currentId + 1}
        case "CLEAR":
            return { ...state, ToDos: [] }
        case "TOGGLE":
            let ToDos = state.ToDos.map(toDo => {
                if (toDo.id === action.payload) {
                    toDo.complete = !toDo.complete
                }
                return toDo;
            })
            return { ...state, ToDos }
    }
}
export default MainReducer;