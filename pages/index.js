import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "../components/Card";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cards = [
  {
    id: 1,
    title: "Discovery12345",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/icons/discovery.svg",
  },
  {
    id: 2,
    title: "Mountain Biking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/icons/mountain.svg",
  },
  {
    id: 3,
    title: "Adventure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/icons/adventure.svg",
  },
  {
    id: 4,
    title: "Beach",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/icons/beach.svg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[420px] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Tour Travel & Adventure Camping</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto drop-shadow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum dapibus augue. Proin mollis ipsum vitae finibus suscipit.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded shadow">Book Now</button>
        </div>
      </div>
      {/* Cards Section */}
      <div className="relative -mt-20 z-20 flex flex-wrap gap-6 justify-center px-4">
        {cards.map(card => (
          <div key={card.id} className="bg-white rounded-xl shadow-lg p-8 w-64 flex flex-col items-center hover:scale-105 transition-transform">
            <Image src={card.image} alt={card.title} width={48} height={48} className="mb-4" />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
      {/* 아래에 Popular Activities 등 추가 영역 필요시 여백 */}
      <div className="h-32" />
    </div>
  );
}
