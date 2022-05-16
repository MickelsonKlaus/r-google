export default function Card({ data }) {
  return (
    <div className="w-full transition-all duration-200 h-fit hover:scale-105">
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
      <div className="px-1 pb-2 shadow-sm rounded-b-md">
        <h3 className="my-1 font-medium">{data?.title}</h3>
        <p className="mb-2 text-xs break-words">{data?.snippet}</p>
        <p className="mb-2 text-xs font-medium">
          Webisite: {data?.displayLink}
        </p>
        <a
          href={data?.link}
          rel="noreferrer"
          target="_blank"
          className="block px-3 py-1 ml-auto mr-0 text-xs text-white bg-black rounded-full w-fit"
        >
          Visit
        </a>
      </div>
    </div>
  );
}
