import GamesPageLayout from "@/components/gamespage-layout";
import NavLinks from "@/components/allgames/nav-links";
import AllGames from "@/components/home-page/allgames.jsx";
import PageNumber from "../../components/allgames/page-number";

export default function PageCustom(props) {
  return (
    <GamesPageLayout>
      <NavLinks path={props.links} />
      <AllGames gamesData={props.allGamesData} genre={props.genreData} />
      <PageNumber />
    </GamesPageLayout>
  );
}
