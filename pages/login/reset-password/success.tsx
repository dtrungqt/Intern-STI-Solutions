import NotificationLayout from "./../../../components/notification-layout";

const pageData = {
  bgImage: { link: "/images/login-page/success.png", title: "success" },
  resultImage: {
    link: "/images/login-page/email.svg",
    title: "success image",
    width: 216,
    height: 218,
  },
  content: {
    main: "SUCCESS!",
    sub: "Please check your email to reset password!",
  },
  button: { status: "none" },
};

export default function SuccessfulResetPage() {
  return <NotificationLayout pageData={pageData} />;
}
