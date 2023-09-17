import Link from "next/link";
import { Fragment } from "react";

export default function NavLinks(props) {
  const links = props.path;
  const length = links.length;

  return (
    <nav
      className={`${
        !props.larger
          ? "wrapper-homepage"
          : "max-w-[1266px] w-full mx-auto mt-[30px]"
      } flex items-center`}
    >
      {links.map((link, i) => {
        let path = `/allgames/${link}`;
        if (link.toLowerCase() === "all games") {
          path = "/allgames";
        }
        if (link.toLowerCase() === "home") {
          path = "/";
        }

        if (i === length - 1) {
          return (
            <Link key={i} href={path} className="text-sm font-normal leading-4">
              {link}
            </Link>
          );
        }
        return (
          <Fragment key={i}>
            <Link
              href={path}
              className="text-sm font-normal leading-4 text-white1"
            >
              {link}
            </Link>
            <img
              src="/images/allgames-page/arrow-right-icon.svg"
              alt="arrow right icon"
            />
          </Fragment>
        );
      })}
    </nav>
  );
}
