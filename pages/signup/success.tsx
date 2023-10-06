import NotificationLayout from "@/components/notification-layout";

const pageData = {
  bgImage: {
    link: "/images/login-page/success.png",
    title: "success",
  },
  resultImage: {
    link: "/images/signup-page/success.svg",
    title: "success signup",
    width: 148,
    height: 148,
  },
  content: {
    main: "SUCCESS!",
    sub: "You're now a member of KinectPortal!",
  },
  button: {
    status: "success",
    img: "/images/signup-page/next-icon.svg",
    link: "/login",
  },
};

export default function SuccessfulSignupPage() {
  return <NotificationLayout pageData={pageData} />;
}
