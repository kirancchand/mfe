import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStore } from 'redux-micro-frontend';
import Todo from './Todo';
import { createStore } from 'redux';
import { TodoReducer } from '../../re-redux/todoReducer';
// import { AddTodo as AddTodoComponent } from './addTodo';
import AddtoDoCom from './AddtoDoCom';
import { AddTodo, RemoveTodo } from '../../re-redux/todo.actions';
function TodoList(){
    const [state, setState] = useState({
		todos: [],
		globalCounter: 0,
	});
    const globalStore = GlobalStore.Get();
    const store = createStore(TodoReducer,  window.devToolsExtension && window.devToolsExtension());
	globalStore.RegisterStore('TodoApp', store, [GlobalStore.AllowAll]);
    const counterChanged = (counterState) => {
		console.log("GGGGGGG");
		setState({
			globalCounter: counterState.global,
		});
	};

    try {
		globalStore.SubscribeToPartnerState('TodoApp','CounterApp',counterChanged);
	} catch (error) {
		//Since
	}

	const stateChanged = (todoState) => {
		console.log("stateChanged",todoState)
		setState({todos: todoState});
	};

	globalStore.Subscribe('TodoApp', stateChanged);

	const addTodo = (description) => {
		globalStore.DispatchAction('TodoApp', AddTodo(description));
	};

	const removeTodo = (todoId) => {
		globalStore.DispatchAction('TodoApp', RemoveTodo(todoId));
	};
    return (
		<div>
			<AddtoDoCom addTodo={(ev)=>addTodo(ev)}/>
			<h2>Todos</h2>
			<ul>
				{state.todos.map((todo,i) => {
					return (
						<li key={i}>
							<Todo
								id={todo.id}
								description={todo.description}
								removeTodo={removeTodo}
							/>
						</li>
					);
				})}
			</ul>
			<div>Global Counter: {state.globalCounter}</div>
		</div>
	);

}
export default TodoList;