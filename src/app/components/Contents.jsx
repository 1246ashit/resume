import HeaderbarItem from "./HeaderbarItem";

export default function Contents({ showCard, children }) {
  return (
    <div
      className={`absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 
          h-screen transition-opacity duration-1000 flex flex-col  justify-center  ${
            showCard ? "opacity-100" : "opacity-0"
          }`}
    >
      <div className="flex flex-row justify-end text-white mt-2">
        <HeaderbarItem
          title={"關於我"}
          className={"bg-blue-700 rounded-t-lg p-3 hover:bg-orange-700"}
          href="/"
        />
        <HeaderbarItem
          title={"專案經歷"}
          className={"bg-blue-800 rounded-t-lg p-3 hover:bg-orange-800"}
          href="/experience"
        />
        <HeaderbarItem
          title={"聯絡我"}
          className={"bg-blue-900 rounded-t-lg p-3 hover:bg-orange-900"}
          href="/contect"
        />
      </div>
      <div className="bg-blue-400  rounded-nr flex items-start justify-center ">
        <section
          className="bg-blue-500 overflow-y-auto w-11/12 rounded-lg  mt-7 mb-7 p-8 "
          style={{ height: "550px" }}
        >
          {children}
        </section>
      </div>
    </div>
  );
}
