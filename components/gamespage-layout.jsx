import Header from "@/components/header";

export default function GamesPageLayout({ children }) {
  return (
    <div className="w-full bg-black2">
      <Header />
      {children}
    </div>
  );
}
