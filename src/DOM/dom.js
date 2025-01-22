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