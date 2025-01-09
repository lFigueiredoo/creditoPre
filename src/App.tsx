import "./App.css";
import React, { useState } from "react";

function App() {
  const [selectedArea, setSelectedArea] = useState("");
  const [courses, setCourses] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  const data: Record<string, string[]> = {
    "Tecnologia e informática": [
      "Web Designer",
      "Desenvolvedor Full Stack",
      "Segurança da Informação",
    ],
    Saúde: ["Atendente de Farmácia", "Enfermeiro", "Fisioterapeuta"],
    Youtuber: ["Edição de Vídeo", "Criação de Conteúdo", "SEO para YouTube"],
    "Setor Industrial": [
      "Técnico em Mecânica",
      "Operador de Máquinas",
      "Logística",
    ],
    "Comércio e serviços": [
      "Gestão Comercial",
      "Atendente de Loja",
      "Marketing",
    ],
    Idiomas: ["Inglês", "Espanhol", "Francês"],
    Preparatórios: ["Enem", "Concurso Público", "Vestibular"],
    "Carreiras mais procuradas": [
      "Administração",
      "Contabilidade",
      "Engenharia Civil",
    ],
  };

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const area = event.target.value;
    setSelectedArea(area);
    setCourses(area ? data[area] : []);
    setSelectedCourse(""); // Resetar curso ao trocar área
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <section className="w-screen h-screen relative bg-fundo2 bg-cover bg-center">
      <form className="w-[450px] bg-[#f5f5f5] shadow-custom relative left-[5%] top-[20%] p-4">
        <h4 className="text-center text-3xl text-inherit font-medium">
          O que deseja estudar?
        </h4>
        <br />
        <div>
          <select
            name="área"
            className="w-full p-2 mb-[10px] border border-[#0000] text-inherit"
            onChange={handleAreaChange}
            defaultValue=""
            aria-label="Selecione uma área de estudo"
          >
            <option value="" disabled hidden>
              Selecione uma área
            </option>
            {Object.keys(data).map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <select
            name="curso"
            className="w-full p-2 mb-[10px] border border-[#0000] text-inherit"
            onChange={handleCourseChange}
            value={selectedCourse}
            disabled={!selectedArea}
            aria-label="Selecione um curso"
          >
            <option value="" disabled hidden>
              Selecione um curso
            </option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <button
          id="quero"
          type="button"
          className="w-full p-[10px] text-[16px] font-normal text-white bg-[#c10024] hover:bg-[#666] border-none rounded-[20px]"
        >
          Quero minha bolsa!
        </button>
      </form>
    </section>
  );
}

export default App;
