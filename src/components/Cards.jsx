export default function Cards({ title, icon, children }) {
  return (
    <div className="h-[150px] text-primaryColor shadow-md rounded-md p-4 text-center bg-slate-100">
      <p className=" font-semibold">{title}</p>
      <div className="text-2xl flex flex-col h-full">
        {icon ? (
          <img
            src={icon}
            alt="title"
            className="self-center max-[800px]:w-[40px] max-[800px]:h-[40px]"
            width={60}
            height={60}
          />
        ) : (
          <br />
        )}
        {children}
      </div>
    </div>
  );
}