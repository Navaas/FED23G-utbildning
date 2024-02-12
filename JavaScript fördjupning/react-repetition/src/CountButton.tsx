interface Props {
  title: string;
}

function CountButton(props: Props) {
  return (
    <button className="bg-slate-200 rounded-full px-4 py-2">
      {props.title} {/* Detta är kopplat till title i App.tsx */}
    </button>
  );
}

export default CountButton;
