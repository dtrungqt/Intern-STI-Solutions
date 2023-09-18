export default function GameTag(props) {
  const tags = props.genre;
  return (
    <ul className="flex justify-start items-center gap-[2px]">
      {tags.map((tag) => (
        <li
          key={tag}
          className="flex items-center justify-center text-[10px] leading-3 p-[5px] rounded-[15px] bg-black4 h-[17px]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
