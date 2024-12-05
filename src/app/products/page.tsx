export default function Page() {
  const now = new Date().toISOString();
  return <div>{`${now}`}</div>;
}
