import {NextResponse} from 'next/server';
import {taskModel} from '../../model/taskModel' 
import {datadb} from '../../data'



export function GET() {

  return NextResponse.json({
    status: "200",
    message: "Listando todas las tareas"
  });
}

export function POST(request) {
  const task = new taskModel(request.body.id, request.body.title, request.body.description, request.body.status);
  console.log(task);
  datadb.push(task);
  return NextResponse.json({
    status: "201",
    message: "Creando una nueva tarea",
    task: task
  });
}