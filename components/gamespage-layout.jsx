import Header from "@/components/header/header.jsx";

export default function GamesPageLayout({ children, imgDetailPage }) {
  return (
    <div
      className={`w-full  ${
        imgDetailPage
          ? "bg-detailPage bg-no-repeat bg-cover bg-center"
          : "bg-black2"
      }`}
    >
      <Header />
      {children}
    </div>
  );
}
