import {NextResponse} from 'next/server';



export function GET() {

  return NextResponse.json({
    status: "200",
    message: "Listando todas las tareas"
  });
}

export function POST() {
  return NextResponse.json({
    status: "201",
    message: "Creando una nueva tarea"
  });
}