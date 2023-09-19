import Button from "@/components/button/button";

export default function DownLoadButton(props) {
  const classes = `${props.className} bg-blueBgGradient text-base leading-[19px]`;
  return (
    <Button className={classes}>
      <span className="mr-[6px]">Download</span>
      <img
        src="/images/home-page/arrow-down-icon.svg"
        alt="arrow-icon"
        // width={11}
        // height={8}
      />
    </Button>
  );
}
