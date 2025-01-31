import { projectList } from "../index";

export function displayProjects() {
    const projectsContent = document.querySelector('.projects-content')
    projectsContent.textContent = ""

    projectList.forEach((e, index) => {
        const project = document.createElement('div')
        project.dataset.index = index
        project.classList.add('project')
        projectsContent.appendChild(project)

        const projectHeader = document.createElement('div')
        projectHeader.classList.add('project-header')
        project.appendChild(projectHeader)

        const projectTitle = document.createElement('p')
        const projectStartDate = document.createElement('p')
        projectTitle.textContent = e.getTitle()
        projectStartDate.textContent = e.getStartDate()
        projectHeader.appendChild(projectTitle)
        projectHeader.appendChild(projectStartDate)

        const todoList = e.getTodoList().slice(0, 4) // getting only the first 4 items
        const projectContent = document.createElement('ul')
        todoList.forEach(e => {
            const todoItem = document.createElement('li')
            todoItem.textContent = e.getTitle()
            projectContent.appendChild(todoItem)
        });

        project.appendChild(projectContent)

        const deleteProjectButtonContainer = document.createElement('div')
        deleteProjectButtonContainer.classList.add('delete-project-button-container')
        project.appendChild(deleteProjectButtonContainer)

        const deleteProject = document.createElement('button')
        deleteProject.classList.add('delete-project-button')
        deleteProject.textContent = "Delete Project"
        deleteProjectButtonContainer.appendChild(deleteProject)
    });
}

export function displayProject(){
    const projectContent = document.querySelector('.projects-content')

    const projectTitle = document.querySelector('.project-detail > .title')
    const projectDetailContent = document.querySelector('.project-detail-content')

    projectContent.addEventListener("click", function(e){
        if(e.target.className === "project"){
            projectTitle.textContent = ""
            projectDetailContent.textContent = ""

            const index = e.target.dataset.index
            const project = projectList[index]
            const todoList = project.getTodoList()
            projectTitle.textContent = project.getTitle()

            todoList.forEach(todo => {
                const todoContainer = document.createElement('div')
                todoContainer.classList.add('todo')
                projectDetailContent.appendChild(todoContainer)

                const todoHeader = document.createElement('div')
                todoHeader.classList.add('todo-header')
                todoContainer.appendChild(todoHeader)

                const todoTitle = document.createElement('p')
                todoTitle.textContent = todo.getTitle()
                const todoDueDate = document.createElement('p')
                todoDueDate.textContent = todo.getDueDate()
                todoHeader.appendChild(todoTitle)
                todoHeader.appendChild(todoDueDate)


                const todoContent = document.createElement('div')
                todoContent.classList.add('todo-content')
                todoContainer.appendChild(todoContent)

                const todoDescription = document.createElement('li')
                todoDescription.textContent = todo.getDescription()
                todoContent.appendChild(todoDescription)
            });
        }
    })
}


export function deleteProject() {
    const projectsContent = document.querySelector('.projects-content')
    projectsContent.addEventListener("click", function(e){
        if(e.target.className === "delete-project-button"){
            if(confirm("Are you sure you would like to delete this project?")){
                const project = e.target.closest('.project')

                const index = project.dataset.index
                projectList.splice(index, 1)

                displayProjects()
            }
        }
    })
}