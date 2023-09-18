import Image from "next/image";

import GamesPageLayout from "@/components/gamespage-layout";
import Button from "@/components/button";

function NotFoundPage() {
  return (
    <GamesPageLayout>
      <div className="w-full h-screen bg-black2 flex flex-col items-center pt-[160px]">
        <Image
          src="/images/page503.png"
          width={720}
          height={240}
          alt="Page 404"
        />
        <h6 className="w-[655px] text-center text-[30px] font-normal leading-[35px] mt-[40px]">
          We're under maintenance. We are improving our website. We'll be back
          shortly.
        </h6>
        <Button
          link="/"
          className="text-base leading-6 mt-[69px] bg-blueBgGradient py-[8px] px-[24px]"
        >
          Back To Homepage
        </Button>
      </div>
    </GamesPageLayout>
  );
}

export default NotFoundPage;
