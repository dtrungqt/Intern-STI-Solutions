import Header from "@/components/header/header.jsx";

export default function GamesPageLayout({ children }) {
  return (
    <div className="w-full bg-black2">
      <Header />
      {children}
    </div>
  );
}
