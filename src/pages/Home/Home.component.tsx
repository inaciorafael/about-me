import dayjs from "dayjs";
import rough from "roughjs";

import ProfileImage from "../../assets/perfil-image-custom.png";
import {
  FaReact as ReactIcon,
  FaVuejs as VueIcon,
  FaAngular as AngularIcon,
} from "react-icons/fa";
import { SiExpo as ExpoIcon } from "react-icons/si";
import { TbBrandReactNative as ReactNativeIcon } from "react-icons/tb";
import { IoLogoElectron as ElectronIcon } from "react-icons/io5";
import { useEffect } from "react";
import { RoughCanvas } from "roughjs/bin/canvas";

const getExperienceYears = (): number => {
  const startWork = dayjs("2019-10-25");

  return dayjs().diff(startWork, "years");
};

//const getAge = (): number => {
//  const today = dayjs();
//  const birthdate = dayjs("1998-06-26");
//
//  return today.diff(birthdate, "years");
//};
//

function drawSprinkles(
  centerX: number,
  centerY: number,
  radius: number,
  numSprinkles: number,
  rc: RoughCanvas,
) {
  for (let i = 0; i < numSprinkles; i++) {
    // Gerar posição aleatória para cada granulado
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * radius;
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;

    // Gerar cor aleatória para o granulado
    const colors = [
      "#FFF",
      "#FF69B4", // Pink
      "#7B68EE", // Medium purple
      "#00FA9A", // Medium spring green
      "#1E90FF", // Dodger blue
      "#FFB6C1", // Light pink
      "#FF00FF", // Magenta
      "#ADFF2F",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Desenhar o granulado como um pequeno círculo
    rc.circle(x, y, 5, {
      fill: color,
      fillStyle: "solid",
      roughness: 0.1,
      strokeWidth: 0.5,
    });
  }
}

const donutBaseColors: string[] = [
  "#F5E3C3", // Bege claro (massa tradicional)
  "#E8C9A0", // Bege com tom quente
  "#D9B58C", // Marrom claro (massa mais assada)
  "#F3D9B1", // Dourado suave
  "#F7E1B5", // Creme pastel
];

const donutCovers: string[] = [
  "#8B4513",
  "#FF6B6B", // Vermelho vibrante
  "#FF9F43", // Laranja intenso
  "#FECB2E", // Amarelo dourado
  "#3CB371", // Verde menta
  "#6A5ACD", // Roxo forte
  "#3498DB", // Azul vibrante
  "#FF69B4", // Rosa chiclete
  "#FF4500", // Laranja avermelhado
  "#FFD700", // Dourado chamativo
  "#ADFF2F", // Verde limão
];

const getRandomItem = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getRandomDonutCover = (): string => {
  return getRandomItem(donutCovers);
};

const getRandomDonutBase = (): string => {
  return getRandomItem(donutBaseColors);
};

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const rc = rough.canvas(canvas);

    rc.circle(150, 80, 130, {
      fill: getRandomDonutBase(),
      fillStyle: "solid",
    });
    rc.circle(150, 68, 125, {
      fill: getRandomDonutCover(),
      fillStyle: "solid",
    });

    drawSprinkles(150, 80, 60, 80, rc);

    rc.circle(150, 80, 50, { fill: "#f0e7db", fillStyle: "solid" });
  }, []);

  return (
    <>
      <canvas id="canvas"></canvas>
      <div className="bg-white/40 px-3 flex items-center justify-center rounded-md py-4">
        <span className="text-black/80 text-center">
          Olá! Sou um desenvolvedor de aplicativos, focado em criar soluções web
          e mobile de qualidade.
        </span>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-between">
        <div className="flex relative flex-col items-start">
          <span className="username text-4xl">Rafael Inácio</span>
          <span className="absolute -bottom-4 -right-0 text-ghost">
            ( Frontend Developer )
          </span>
        </div>
        <img
          alt="profile-image"
          className="w-24 border-[2px] border-white rounded-full"
          src={ProfileImage}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <span className="topic-title">Sobre mim</span>
        </div>
        <div className="text-justify">
          <p>
            <strong>Desenvolvedor Frontend</strong> com{" "}
            <strong>mais de {getExperienceYears()} anos de experiência</strong>{" "}
            em projetos de alto impacto, atuando com tecnologias modernas como{" "}
            <mark className="bg-[#A0E7E5] inline-flex items-center gap-2 font-bold plusRounded">
              <ReactIcon /> ReactJS
            </mark>
            ,{" "}
            <mark className="bg-[#A0E7E5] inline-flex items-center gap-2 font-bold plusRounded">
              <ReactNativeIcon /> React Native
            </mark>
            ,
            <mark className="bg-[#B4F8C8] inline-flex items-center gap-2 font-bold plusRounded">
              <VueIcon /> Vue.js
            </mark>{" "}
            e{" "}
            <mark className="bg-[#FFB3BA] inline-flex items-center gap-2 font-bold plusRounded">
              <AngularIcon /> Angular
            </mark>
            . Especializado na criação e manutenção de sistemas web e mobile,
            incluindo aplicações híbridas com
            <mark className="bg-[#A0E7E5] inline-flex items-center gap-2 font-bold plusRounded">
              <ExpoIcon /> Expo/Expo Web
            </mark>{" "}
            e{" "}
            <mark className="bg-[#A0E7E5] inline-flex items-center gap-2 font-bold plusRounded">
              <ElectronIcon /> Electron
            </mark>
            . Domínio em <strong>gerenciamento de estado</strong> com{" "}
            <mark>Redux</mark>, <mark>Zustand</mark> e <mark>Vuex</mark>, além
            de interfaces estilizadas com{" "}
            <a href="https://styled-components.com/">Styled Components</a>,{" "}
            <a href="https://mui.com/material-ui/">Material UI</a>,{" "}
            <a href="https://nativebase.io/">Native Base</a> e{" "}
            <a href="https://tailwindcss.com/">TailwindCSS</a>.
          </p>
          <p>
            Experiência em <u>desenvolvimento ágil</u> (<i>Scrum/Kanban</i>),{" "}
            <strong>resolução de bugs</strong>, construção de{" "}
            <strong>componentes reutilizáveis</strong> e criação de features
            robustas utilizando
            <code>TypeScript</code>, <code>GraphQL</code>, <code>Axios</code> e{" "}
            <code>Jest</code> para testes unitários. Forte integração com
            ferramentas de versionamento e colaboração como
            <mark>Git</mark>, <mark>Jira</mark>, <mark>Azure</mark> e{" "}
            <mark>Slack</mark>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
