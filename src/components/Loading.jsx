import PulseLoader from "react-spinners/PulseLoader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-[calc(100vw-250px)] h-[calc(100vh-10rem)] gap-2">
      <p className="text-xl">Loading movies</p>
      <PulseLoader color="#fff" />
    </div>
  );
}
