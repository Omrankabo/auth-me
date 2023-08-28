import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
    <h1 className='text-3xl uppercase font-bold'>Home page</h1>
    <h2 >visit on of login or signup page</h2>
    <div className='flex gap-8 items-center text-xl font-semibold'>
      <Link href={'/login'}> Visit Login</Link>
      <Link href={'/signup'}> Visit Signup</Link>
    </div>

    </main>
  );
}
