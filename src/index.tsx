import { Helmet } from 'react-helmet';
import "./App.css";
import StreamingImg from "./assets/streaming.png";
import Drone from "./assets/Drone.jpg";
import Zombie from "./assets/zombie2.jpg";
//import None from "./assets/None.png";

const projects = [
  {
    id: 1,
    title: "화물 운송용 드론",
    description: "학부 졸업 작품으로 진행한 프로젝트",
    date:"2022-12 ~ 2023-07",
    thumbnail:
        Drone,
    technologies: ["Arduino", "C"],
    link: "http://211.188.55.250:8050/Drone.html",
  },
  {
    id: 2,
    title: "실시간 스트리밍 웹 서비스",
    description: "마상소프트 인턴 기간 중 개인 프로젝트",
    date:"2023-11 ~ 2024-01",
    thumbnail:
      StreamingImg,
    technologies: ["HLS", "Node.js", "NPM"],
    link: "http://211.188.55.250:8080",
  },
  {
    id: 3,
    title: "유니티 기반 VR 좀비 슈팅 게임",
    description: "지스타 2024 참가 프로젝트",
    date:"2024-10 ~ 2024-11",
    thumbnail:
      Zombie,
    technologies: ["Unity", "C#", "VR"],
    link: "http://211.188.55.250:8050/LastStand.html",
  },
  // {
  //   id: 4,
  //   title: "C++ 프로젝트",
  //   description: "C++ 그래픽 렌더링",
  //   date:"진행중",
  //   thumbnail:
  //   None,
  //   technologies: ["C++",],
  //   link: "#",
  // },
  // {
  //   id: 5,
  //   title: "C++ 프로젝트",
  //   description: "C++ 메모리 검사",
  //   date:"미정",
  //   thumbnail:
  //   None,
  //   technologies: ["C++", ],
  //   link: "#",
  // },
  // {
  //   id: 6,
  //   title: "컴퓨터 비전 AI",
  //   description: "영상 처리 AI",
  //   date:"미정",
  //   thumbnail:
  //   None,
  //   technologies: ["AI", ],
  //   link: "#",
  // },
];

function App() {
  return (
    <div className="portfolio">
      <Helmet>
                <title>protfolio</title>
      </Helmet>
      <header className="header">
        <h1>프로젝트</h1>
      </header>
      <main className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-thumbnail"
              />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p><br></br>
                <p id="Date">{project.date}</p>
              </div>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Kim Hee Sung . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
