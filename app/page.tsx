import Link from 'next/link';
export default function Home() {
  let name = 'eom';
  return (
    <div>
      <h4 className="title">Nextjs</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
