export class Project {
    #title
    #startDate
    #todoList = []

    constructor(title, startDate) {
        this.#title = title
        this.#startDate = startDate
    }

    setTitle(title){
        this.#title = title
    }
    setStartDate(startDate){
        this.#startDate = startDate
    }
    push(Todo){
        this.#todoList.push(Todo)
    }
    remove(index){
        this.#todoList.splice(index, 1)
    }

    getTitle(){
        return this.#title
    }
    getStartDate(){
        return this.#startDate
    }
    getTodoList(){
        return this.#todoList
    }
}