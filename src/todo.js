export class Todo {

    #title
    #dueDate
    #description
    #priority

    constructor(title, dueDate) {
        this.#title = title
        this.#dueDate = dueDate
    }

    setTitle(title) {
        this.#title = title
    }
    setDueDate(dueDate){
        this.#dueDate = dueDate
    }
    setDescription(description){
        this.#description = description
    }
    setPriority(priority){
        this.#priority = priority
    }

    getTitle(){
        return this.#title
    }
    getDueDate(){
        return this.#dueDate
    }
    getDescription(){
        return this.#description
    }
    getPriority(){
        return this.#priority
    }
}