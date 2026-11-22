
const About = () => {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen bg-[#eae8e2] px-5 py-12 font-sans">

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes skillShow {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .skill-chip {
          animation: skillShow 0.5s ease backwards;
          transition: all 0.3s ease;
        }

        .skill-chip:hover {
          transform: translateY(-6px) scale(1.07);
          background: #222522;
          color: #e8e2d5;
          border-color: #222522;
          box-shadow: 0 8px 20px rgba(34,37,34,0.15);
        }

        .about-card {
          transition: all 0.35s ease;
        }

        .about-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(34,37,34,0.12);
        }

        .about-heading {
          font-family: Georgia, serif;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 fade-up">

          <p className="text-[#9b8968] uppercase tracking-[4px] text-sm mb-4">
            Get To Know Me
          </p>

          <h1 className="about-heading text-5xl md:text-6xl font-bold text-[#252923] mb-5">
            About Me
          </h1>

          <p className="text-[#77786f] max-w-2xl mx-auto leading-8">
            A journey of learning, building, improving and dreaming
            about a better future.
          </p>

        </div>

        {/* Introduction */}
        <div className="bg-[#222522] rounded-2xl p-8 md:p-10 mb-10 shadow-xl fade-up">

          <h2 className="about-heading text-3xl font-semibold text-[#e8e2d5] mb-5">
            Hello, I'm a Developer.
          </h2>

          <p className="text-[#b2b3a9] leading-8">
            I'm a passionate learner and aspiring Full Stack Developer
            with a background in Physics. I believe that consistency,
            curiosity and hard work can turn big dreams into reality.
            My journey is about learning new technologies, solving
            problems and building meaningful digital experiences.
          </p>

        </div>

        {/* Journey */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Past */}
          <div className="about-card bg-white rounded-2xl p-7 border border-[#dedbd1] shadow-sm">

            <div className="w-12 h-12 bg-[#eae5d9] rounded-xl flex items-center justify-center mb-6 text-2xl">
              🎓
            </div>

            <p className="text-[#9b8968] text-sm tracking-widest uppercase mb-3">
              My Past
            </p>

            <h2 className="about-heading text-2xl font-semibold text-[#292d27] mb-4">
              Where I Started
            </h2>

            <p className="text-[#77786f] leading-7 text-sm">
              My academic journey started with science, and I am
              currently studying Honours in Physics. Although my
              academic background is different from computer science,
              my curiosity led me into the world of programming.
              I started with HTML and CSS and gradually explored
              JavaScript and web development.
            </p>

          </div>

          {/* Present */}
          <div className="about-card bg-[#222522] rounded-2xl p-7 shadow-xl">

            <div className="w-12 h-12 bg-[#3b3c33] rounded-xl flex items-center justify-center mb-6 text-2xl">
              💻
            </div>

            <p className="text-[#c5b795] text-sm tracking-widest uppercase mb-3">
              My Present
            </p>

            <h2 className="about-heading text-2xl font-semibold text-[#e8e2d5] mb-4">
              What I'm Doing
            </h2>

            <p className="text-[#b2b3a9] leading-7 text-sm">
              Currently, I am focused on becoming a Full Stack
              Developer. I work with React, TypeScript, Node.js,
              Express.js and MongoDB. I am improving my skills
              through practical projects, backend development,
              authentication systems and real-world problem solving.
            </p>

          </div>

          {/* Future */}
          <div className="about-card bg-white rounded-2xl p-7 border border-[#dedbd1] shadow-sm">

            <div className="w-12 h-12 bg-[#eae5d9] rounded-xl flex items-center justify-center mb-6 text-2xl">
              🚀
            </div>

            <p className="text-[#9b8968] text-sm tracking-widest uppercase mb-3">
              My Future
            </p>

            <h2 className="about-heading text-2xl font-semibold text-[#292d27] mb-4">
              Where I'm Going
            </h2>

            <p className="text-[#77786f] leading-7 text-sm">
              My goal is to become a skilled Software Engineer,
              work with international teams and build products
              that solve real problems. In the long term, I want
              to explore DevOps, cloud computing and advanced
              technologies while growing professionally.
            </p>

          </div>

        </div>

        {/* Skills */}
        <div className="mt-12 bg-white rounded-2xl p-8 md:p-10 border border-[#dedbd1] fade-up">

          <p className="text-[#9b8968] text-sm uppercase tracking-[3px] mb-3">
            My Expertise
          </p>

          <h2 className="about-heading text-3xl font-bold text-[#292d27] mb-3">
            Technologies I'm Learning & Using
          </h2>

          <p className="text-[#77786f] mb-8 text-sm">
            Tools and technologies I use to build digital experiences.
          </p>

          <div className="flex flex-wrap gap-3">

            {skills.map((skill, index) => (
              <span
                key={skill}
                style={{ animationDelay: `${index * 0.12}s` }}
                className="skill-chip cursor-pointer px-5 py-3 rounded-xl bg-[#f0eee8] text-[#55584e] text-sm font-medium border border-[#e2dfd5]"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Goal */}
        <div className="mt-10 bg-[#222522] rounded-2xl p-8 md:p-10 text-center fade-up">

          <div className="text-4xl mb-5">
            🎯
          </div>

          <h2 className="about-heading text-3xl md:text-4xl font-semibold text-[#e8e2d5] mb-5">
            My Philosophy
          </h2>

          <p className="text-[#b2b3a9] leading-8 max-w-2xl mx-auto">
            I don't believe in overnight success. I believe in
            learning every day, staying consistent, accepting
            challenges and becoming better than I was yesterday.
          </p>

          <p className="text-[#c5b795] mt-7 font-medium tracking-wide">
            Dream Big. Learn Daily. Build Consistently.
          </p>

        </div>

      </div>
    </div>
  );
};

export default About;
