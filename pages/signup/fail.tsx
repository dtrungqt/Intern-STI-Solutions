import NotificationLayout from "@/components/notification-layout";

const pageData = {
  bgImage: {
    link: "/images/signup-page/fail-bg.png",
    title: "fail background",
  },
  resultImage: {
    link: "/images/signup-page/fail.svg",
    title: "fail signup",
    width: 148,
    height: 148,
  },
  content: {
    main: "OOPS!",
    sub: "Something went wrong. Please try again.",
  },
  button: { status: "fail", img: "/images/signup-page/next-icon.svg" },
};

export default function FailPage() {
  return <NotificationLayout pageData={pageData} />;
}
