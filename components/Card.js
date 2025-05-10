import Image from "next/image";

export default function Card({ card }) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-64 bg-white">
      <Image src={card.image} alt={card.title} width={80} height={80} className="mx-auto" />
      <h2 className="text-lg font-bold mt-2">{card.title}</h2>
      <p className="text-gray-600 mt-1">{card.description}</p>
    </div>
  );
} 