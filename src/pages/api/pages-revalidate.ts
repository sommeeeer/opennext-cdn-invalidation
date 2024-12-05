import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Revalidating /pages-products from pages router');
  await res.revalidate('/pages-products');
  res.status(200).json({ message: 'Done' });
}
