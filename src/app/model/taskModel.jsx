//creamos model para la tarea


export default class TaskModel {
    constructor(id, title, description, ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = boolean;
    }

    //metodo para cambiar el estado de la tarea
    changeStatus() {
        this.status = !this.status;
    }
    //metodo para actualizar la tarea
    updateTask(title, description) {
        this.title = title;
        this.description = description;
    }
    //metodo para obtener la tarea
    getTask() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            status: this.status
        }
    }
}