import React from "react";
import { connect } from "react-redux";
import {
    add,
    complete,
    remove,
    update,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(add(obj)),
        removeTodo: (id) => dispatch(remove(id)),
        updateTodo: (obj) => dispatch(update(obj)),
        completeTodo: (id) => dispatch(complete(id)),
    };
};

const AllTodos = (props) => {
    // const [sort, setSort] = useState("active");
    return (
        <div className="displaytodos">

            <ul>


                {props.todos.length > 0
                    ? props.todos.map((item) => {
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        );
                    })
                    : null}

            </ul>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTodos);
