export default function Login() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4 max-w-sm mx-auto">
        <input className="border p-2 w-full" type="text" placeholder="Username" />
        <input className="border p-2 w-full" type="password" placeholder="Password" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type="submit">Login</button>
      </form>
    </div>
  );
}