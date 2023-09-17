import Link from "next/link";
import { Fragment } from "react";

export default function NavLinks(props) {
  const links = props.path;
  const length = links.length;

  return (
    <nav
      className={`${
        !props.larger ? "max-w-[1312px]" : "max-w-[1266px]"
      } flex items-center w-full mx-auto pt-[90px]`}
    >
      {links.map((link, i) => {
        let path = `/allgames/${link.toLowerCase()}`;
        if (link.toLowerCase() === "all games") {
          path = "/allgames";
        }
        if (link.toLowerCase() === "my games") {
          path = "/mygames";
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
