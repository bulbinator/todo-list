import "./styles.css";
import { Todo } from "./classes/todo";
import { Project } from "./classes/project";

const todo1 = new Todo('testTodo1', 'testdate')
todo1.setDescription('testing')
todo1.setPriority('1')

const todo2 = new Todo('testTodo2', 'testdate')
todo2.setDescription('testing')
todo2.setPriority('2')

const todo3 = new Todo('testTodo3', 'testdate')
todo3.setDescription('testing')
todo3.setPriority('3')

const project = new Project('testProject', 'testdate')
project.push(todo1)
project.push(todo2) 
project.push(todo3)

console.log('')