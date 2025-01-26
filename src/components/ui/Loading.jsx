import PulseLoader from "react-spinners/PulseLoader";

export default function Loading({text}) {
  return (
    <div className="flex justify-center items-center lg:w-[calc(100vw-250px)] h-[calc(100vh-10rem)] gap-2">
      <p className="text-xl">Loading Movie {text}</p>
      <PulseLoader color="#fff" />
    </div>
  );
}
