import { useRouter } from "next/router";
import Card from "../../components/Card";

const cards = [
  {
    id: 1,
    title: "Next.js란?",
    description: "React 기반의 프레임워크로 SSR, SSG를 지원합니다.",
    image: "/next.svg",
  },
  {
    id: 2,
    title: "카드뉴스 앱 만들기",
    description: "Next.js와 TailwindCSS로 카드뉴스 앱을 만들어보세요!",
    image: "/globe.svg",
  },
];

export default function CardDetail() {
  const router = useRouter();
  const { id } = router.query;
  const card = cards.find((c) => c.id === Number(id));

  if (!card) return <div className="p-8 text-center">카드를 찾을 수 없습니다.</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">카드 상세</h1>
      <Card card={card} />
    </div>
  );
} 