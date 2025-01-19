import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedArea, setSelectedArea] = useState("");
  const [courses, setCourses] = useState<string[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(900);

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
    setSelectedCourse("");
  };

  const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setCountdown(900);
  };

  useEffect(() => {
    if (isModalOpen && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen, countdown]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(countdown);

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
          onClick={handleButtonClick}
          className="w-full p-[10px] text-[16px] font-normal text-white bg-[#c10024] hover:bg-[#666] border-none rounded-[20px]"
        >
          Quero minha bolsa!
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="absolute top-4 bg-white text-black text-2xl px-4 py-2 rounded-md shadow-md">
            Oferta termina em:
            <div>
              {hours} :{" "}
              <span className="text-red-600 font-black">{minutes} </span>:{" "}
              <span className="text-red-600 font-black">{seconds}</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Sua bolsa está quase garantida!
            </h2>
            <p>Finalize sua inscrição para garantir a bolsa de estudos.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
