import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  revalidatePath('/products');
  return NextResponse.json({
    message: 'Revalidation request sent',
  });
}
