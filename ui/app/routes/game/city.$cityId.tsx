import { useParams } from "@remix-run/react";

export default function City() {
  const { cityId } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">City Management: {cityId}</h1>
      <p>Manage city {cityId} here.</p>
    </div>
  );
}