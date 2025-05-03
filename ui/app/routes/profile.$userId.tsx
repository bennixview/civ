import { useParams } from "@remix-run/react";

export default function Profile() {
  const { userId } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Profile: {userId}</h1>
      <p>Public profile of player {userId}.</p>
    </div>
  );
}