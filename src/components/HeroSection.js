import Image from 'next/image';
import jewelryImage from '@/public/jewelry.JPG'; 

export default function HeroSection() {
  return (
    <div className="bg-[#b6a78c]">
      <header className="text-center py-6">
        <h1 className="text-white text-3xl font-bold tracking-wide">MANZZARI</h1>
      </header>

  
      <div className="flex items-center justify-between px-10 py-20 bg-white">
      
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
          <p className="text-gray-600">
            An example of intricate workmanship and detail, elegant necklaces, and long and short chains form a part of our desirable collection.
          </p>
          <button className="mt-4 px-6 py-2 bg-[#b6a78c] text-white font-semibold rounded-md hover:bg-opacity-90">
            Explore Now
          </button>
        </div>

        <div className="relative">
          <div className="w-64 h-64 overflow-hidden">
            <Image src={jewelryImage} alt="Jewelry" className='object-contain' layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
