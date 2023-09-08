import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className: string;
  link: string;
};

export default function Button({ children, className = "", link = "" }: Props) {
  type commonStyle = string;
  
  const commonStyle =
    "flex items-center justify-center h-[35px] py-3 px-[30px] rounded-xl";
  if ((link = "")) {
    return (
      <button type="submit" className={`${commonStyle} ${className}`}>
        {children}
      </button>
    );
  }
  return (
    <Link href={link} className={`${commonStyle} ${className}`}>
      {children}
    </Link>
  );
}

// export default function Button({ children, className = "", link = "" }) {
//   return (
//     <Link
//       href={link}
//       className={`flex items-center h-[35px] py-3 px-[30px] font-medium text-base rounded-xl ${className}`}
//     >
//       {children}
//     </Link>
//   );
// }
