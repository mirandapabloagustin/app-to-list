import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ 
      status: "ok", 
      message: "La API está funcionando correctamente" 
    });
}