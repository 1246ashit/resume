import About from "../../../about/page";
import Experience from "../../../experience/page";
export default function Card({content}) {

  return (
      <div className="bg-blue-950 w-11/12  rounded-lg mt-7 mb-7 p-4">
        {content === "about" && <About/>}
        {content === "experience" && <Experience/>}
      </div>
  );
}
