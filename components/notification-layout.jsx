import Image from "next/image";
import Button from "./button/button";

export default function NotificationLayout({ pageData }) {
  return (
    <div className="container--success w-full bg-signupSuccessPage min-h-[1024px] h-full relative bg-cover bg-center object-cover">
      <div className="max-w-[751px] w-full h-[577px] bg-black2 rounded-[20px] absolute top-1/2 left-1/2 translate-center">
        <Image
          src={pageData.bgImage.link}
          alt={pageData.bgImage.title}
          width={751}
          height={288}
          className="absolute top-0 left-0 -z-10"
        />
        <Image
          src={pageData.resultImage.link}
          alt={pageData.resultImage.title}
          width={pageData.resultImage.width}
          height={pageData.resultImage.height}
          className="absolute top-[36%] left-1/2 translate-center"
        />
        <div className="w-[350px] max-w-full h-[85px] pt-[350px] m-auto">
          <h1 className="text-6xl leading-[70px] font-black text-center mb-2">
            {pageData.content.main}
          </h1>
          <h6 className="text-lg leading-[23px] text-center">
            {pageData.content.sub}
          </h6>
          {pageData.button.status === "success" && (
            <Button
              className="mx-auto mt-8 bg-green1 shadow-successBtn"
              link={pageData.button.link}
            >
              Continue
              <img
                src={pageData.button.img}
                alt={pageData.button.status}
                className="ml-[6px]"
              />
            </Button>
          )}
          {pageData.button.status === "fail" && (
            <Button className="mx-auto mt-8 bg-red1 shadow-failBtn">
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
