import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), 'public/news');
  const filePath = path.join(jsonDirectory, 'data.json');

  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error reading file', details: error.message }, { status: 500 });
  }
}
