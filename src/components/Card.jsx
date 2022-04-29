export default function Card({ data }) {
  return (
    <div className="w-full h-fit transition-all hover:scale-105 duration-200">
      <img
        src={
          data?.pagemap?.cse_image
            ? data?.pagemap?.cse_image[0]?.src
            : "../default.png"
        }
        alt="poster"
        className={`w-full h-32 rounded-t-md object-center ${
          data?.pagemap?.cse_image ? "object-cover" : "object-contain"
        }`}
      />
      <div className="px-1 shadow-sm rounded-b-md pb-2">
        <h3 className="font-medium my-1">{data?.title}</h3>
        <p className="text-xs mb-2">{data?.snippet}</p>
        <p className="text-xs font-medium mb-2">
          Webisite: {data?.displayLink}
        </p>
        <a
          href={data?.link}
          rel="noreferrer"
          target="_blank"
          className="bg-black rounded-full px-3 py-1 w-fit mr-0 ml-auto text-xs text-white block"
        >
          Visit
        </a>
      </div>
    </div>
  );
}
