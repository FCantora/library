export default function Loader() {
  return (
    <div
      data-testid="loader"
      className="flex items-center justify-center min-h-[calc(100vh-14rem)]"
    >
      <div className="relative w-24 h-24">
        <div className="absolute w-full h-full rounded-full border-4 border-t-orange-300 border-r-neutral-400 border-b-white border-l-neutral-400 animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 rounded-full border-4 border-t-white border-r-orange-300 border-b-neutral-400 border-l-white animate-spin animation-delay-150"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 rounded-full border-4 border-t-neutral-400 border-r-white border-b-orange-300 border-l-neutral-400 animate-spin animation-delay-300"></div>
      </div>
    </div>
  );
}
