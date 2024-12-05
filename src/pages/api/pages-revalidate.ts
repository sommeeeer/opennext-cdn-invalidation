import type { NextApiResponse } from 'next';

export default async function handler(res: NextApiResponse) {
  console.log("res.revalidate('/pages-products');");
  await res.revalidate('/pages-products');
  res.status(200).json({ message: 'Done' });
}
