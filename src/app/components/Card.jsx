import About from "../../../about/page";
import Experience from "../../../experience/page";
export default function Card({ content }) {
  return (
    <div className={`bg-blue-400 rounded-nr flex items-start justify-center `}>
      <section  className="bg-blue-950  max-h-96 overflow-y-auto w-11/12 rounded-lg mt-7 mb-7 p-4 ">
        {content === "about" && <About />}
        {content === "experience" && <Experience />}
      </section >
    </div>
  );
}
