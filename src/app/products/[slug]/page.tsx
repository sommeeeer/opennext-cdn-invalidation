type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    {
      slug: 'conico',
    },
  ];
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const now = new Date().toISOString();
  return <div>{`${slug} ${now}`}</div>;
}
