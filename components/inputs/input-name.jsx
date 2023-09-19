export default function InputName(props) {
  return (
    <label htmlFor="emailOrPhone" className="text-xl font-semibold leading-6">
      Email or Phone Number
      <input
        type="text"
        id="emailOrPhone"
        name="emailOrPhone"
        className="w-full mt-[10px] bg-grey3 max-w-[386] h-12 rounded-[10px] px-4"
        onChange={props.onNameInputChange}
        onBlur={props.onNameInputBlur}
        value={props.nameValue}
      />
      {/* hiển thị thông báo lỗi  */}
      {props.hasError && (
        <p className="text-base text-red1 mt-2">Name must not be empty!</p>
      )}
    </label>
  );
}
