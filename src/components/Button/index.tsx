type Button = {
  className?: string;
  title: string;
  handleOnClick: () => void;
};

function GenericButton({ title, className, handleOnClick }: Button) {
  const defaultClasses = "bg-blue-500 text-white px-2 py-2 rounded";

  const combinedClasses = `${defaultClasses} ${className}`;
  return (
    <button className={combinedClasses} onClick={handleOnClick} title={title}>
      {title}
    </button>
  );
}

export default GenericButton;
