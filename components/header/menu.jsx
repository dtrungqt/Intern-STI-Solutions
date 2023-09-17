import Link from "next/link";

const genres = [
  { name: "Action", icon: "/images/home-page/gun-icon.svg" },
  { name: "Adventure", icon: "/images/home-page/flag-icon.svg" },
  { name: "Arcade", icon: "/images/home-page/applearcade-icon.svg" },
  { name: "Art", icon: "/images/home-page/art-icon.svg" },
  { name: "Reality", icon: "/images/home-page/eye-icon.svg" },
];

export default function Menu(props) {
  return (
    <div
      className={`container-menu fixed top-0 left-0 w-[316px] h-screen z-20 bg-black6 ${
        props.menuStatus ? "block" : "hidden"
      }`}
    >
      <div className="container-menu--content relative w-[270px] mx-auto mt-10">
        <div className="container-menu--content__title flex items-center justify-between">
          <h2 className="text-2xl leading-7 font-extrabold">GENRE</h2>
          <img
            src="/images/home-page/subtract-line-icon.svg"
            alt="subtract-line-icon"
            className="cursor-pointer"
            onClick={props.menuHandler}
          />
        </div>
        <ul className="flex flex-col gap-4 mt-[20px]">
          {genres.map((genre) => {
            return (
              <li key={genre.name} className="flex items-center gap-2">
                <img src={genre.icon} alt={genre.name} />
                <Link
                  href={`/allgames/${genre.name.toLowerCase()}`}
                  className="text-blue5 text-sm leading-4"
                >
                  {genre.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
