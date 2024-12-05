import type { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}

export default function Page({
  time,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div className="flex">Time: {time}</div>;
}