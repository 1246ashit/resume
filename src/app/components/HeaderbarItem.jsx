export default function HeaderbarItem({ title, className,onClick }) {
  return (
    <div className={` ${className}`} onClick={onClick}>
        <p className="">
            {title}
        </p>
    </div>
  );
}
