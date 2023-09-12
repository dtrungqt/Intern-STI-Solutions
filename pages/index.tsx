import Button from "@/components/button";
const listGamesData = [
  { image: "/images/welcome-page/god-of-war.jpg", title: "God of War" },
  {
    image: "/images/welcome-page/bioshock-infinite.jpg",
    title: "Bioshock Infinite",
  },
  { image: "/images/welcome-page/the-legant.jpg", title: "The Legant" },
  { image: "/images/welcome-page/car-crash.jpg", title: "Car Crash" },
  { image: "/images/welcome-page/fire-car.jpg", title: "Fire Car" },
];

export default function Home() {
  return (
    <div className="w-full min-h-[1024px] h-full relative bg-welcomePage bg-cover bg-center object-cover">
      <header className="w-full h-20 fixed top-0 left-0 bg-grey1">
        <nav className="wrapper flex items-center justify-end">
          <div className="flex items-center justify-between gap-x-[5px]">
            <Button
              link="/login"
              className="font-medium text-base border-gradient border-2 border-solid"
            >
              Login
            </Button>
            <Button
              link="/signup"
              className="font-medium text-base bg-blueBgGradient"
            >
              Become Member
            </Button>
          </div>
        </nav>
      </header>
      <main className="wrapper flex justify-end mb-[33px]">
        <div className="flex flex-col items-start max-w-[714px] w-full mt-[315px]">
          <h3 className="text-blue1 text-[40px] leading-[47px] mb-[26px]">
            Best Kinect Gaming
          </h3>
          <h1 className="font-black text-[80px] leading-[93.75px] tracking-normal text-left mb-[26px]">
            Be the best player and get better on ABC
          </h1>
          <p className="text-xl font-[400] leading-6 text-left mb-[22px]">
            Open repair of infrarenal aortic aneurysm or dissection, plus repair
            of associated arterial trauma, following unsuccessful endovascular
            repair; aorto-bi-iliac prosthesis
          </p>
          <Button
            link="/about"
            className="bg-blueBgGradient self-end mr-[17px]"
          >
            Learn More
          </Button>
        </div>
      </main>
      <footer className="pl-[120px] pb-[37px]">
        <div className="flex gap-[72px] mb-[14px]">
          <img src="/images/welcome-page/left-icon.svg" alt="left-icon" />
          <img src="/images/welcome-page/right-icon.svg" alt="right-icon" />
        </div>
        <ul className="flex gap-x-5">
          {listGamesData.map((game) => (
            <li key={game.title}>
              <img
                src={game.image}
                alt={game.title}
                className="w-full mb-4 rounded-[10px]"
              />
              <h6 className="text-xl leading-6">{game.title}</h6>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
