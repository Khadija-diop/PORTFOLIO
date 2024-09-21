import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Image src="/iabac.png" width={400} height={300} className='rounded-md '/>
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Bienvenue sur mon portfolio</h1>
      <p className="text-lg text-gray-700 mb-8">
        Je suis un développeur web mobile passionné par la création d'applications modernes.
      </p>
     
      <Link href="/projects">
        <p className="bg-[#D2D2EB] text-gray-950 py-2 px-4 rounded hover:bg-[#FF9CB6] hover:text-[#C49FFF]">
          Voir mes projets
        </p>
      </Link>
    </div>
  );
}
