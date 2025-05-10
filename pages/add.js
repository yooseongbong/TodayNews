import { useState } from "react";

export default function AddCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`제목: ${title}\n설명: ${description}\n이미지: ${image}`);
    // TODO: 실제 카드 데이터 추가 로직 구현
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">카드 추가</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80 space-y-4">
        <div>
          <label className="block mb-1 font-medium">제목</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">설명</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">이미지 경로</label>
          <input
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
            className="w-full border rounded px-2 py-1"
            placeholder="/next.svg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">추가</button>
      </form>
    </div>
  );
} 