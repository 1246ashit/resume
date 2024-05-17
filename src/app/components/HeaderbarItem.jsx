export default function HeaderbarItem({ title, className,onClick }) {
  return (
    <div className={` ${className} cursor-pointer`} onClick={onClick}>
        <p className="text-center font-semibold">
            {title}
        </p>
    </div>
  );
}