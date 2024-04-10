import {NextResponse} from 'next/server';

export function GET() {
  return NextResponse.json({
    status: "200",
    message: "Obtuviste una tarea"
  });
}

export function PUT() {
  return NextResponse.json({
    status: "201",
    message: "Actualizaste una tarea"
  });
}

export function DELETE() {
  return NextResponse.json({
    status: "204",
    message: "Eliminaste una tarea"
  });
}
