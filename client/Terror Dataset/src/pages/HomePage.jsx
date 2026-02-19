import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col font-bold justify-around items-center ">
      {/* <h1 className="text-4xl">welcome to the complaints system!</h1> */}
      <Link to="/data">data</Link>
      <div>HomePage</div>
    </div>
  );
}
