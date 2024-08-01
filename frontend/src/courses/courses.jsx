import Course from "../Componentes/Course";
import Footer from "../Componentes/Footer";
import NavBar from "../Componentes/NavBar";

function Courses() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
