
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f2] px-5 py-16">

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

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

        .float-card {
          animation: float 4s ease-in-out infinite;
        }

        .fade-up {
          animation: fadeUp 0.9s ease forwards;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 items-center gap-12 min-h-[75vh]">

          {/* Left Content */}
          <div className="fade-up">

            <span className="inline-block bg-[#e4eee4] text-[#47734e] px-4 py-2 rounded-full text-sm font-semibold mb-7">
              ✦ Your Productivity Partner
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#242b25] leading-tight">
              Organize your
              <span className="text-[#779b75]"> Work </span>
              and life,
              <span className="block">finally.</span>
            </h1>

            <p className="text-[#777d75] text-lg leading-8 mt-7 max-w-lg">
              Become focused, organized and calm with our Todo App.
              Manage your daily tasks, organize your goals and make
              every day more productive.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">

              <Link
                to="/todo"
                className="bg-[#769776] hover:bg-[#5d805f] text-white px-7 py-4 rounded-xl font-semibold shadow-lg transition duration-300 hover:-translate-y-1"
              >
                Make Todo List →
              </Link>

              <Link
                to="/login"
                className="border border-[#d8ded5] text-[#384638] px-7 py-4 rounded-xl font-semibold hover:bg-[#e9eee6] transition duration-300"
              >
                Login
              </Link>

            </div>

            <div className="flex items-center gap-3 mt-10 text-sm text-[#858b81]">
              <span className="text-[#769776]">✓</span>
              Simple to use
              <span className="text-[#769776] ml-3">✓</span>
              Stay organized
            </div>

          </div>

          {/* Right Todo Preview */}
          <div className="flex justify-center">

            <div className="float-card w-full max-w-md bg-white rounded-3xl p-7 shadow-2xl border border-[#e9ece5]">

              <div className="flex justify-between items-center mb-8">

                <div>
                  <p className="text-sm text-[#92998e]">
                    My Workspace
                  </p>

                  <h2 className="text-2xl font-bold text-[#293329] mt-1">
                    Daily Tasks
                  </h2>
                </div>

                <div className="bg-[#eaf1e8] p-3 rounded-xl text-2xl">
                  📋
                </div>

              </div>

              {/* Progress */}
              <div className="mb-8">

                <div className="flex justify-between text-sm mb-3">
                  <span className="text-[#6f776d]">
                    Today's Progress
                  </span>

                  <span className="font-bold text-[#769776]">
                    60%
                  </span>
                </div>

                <div className="w-full h-2 bg-[#edf0e9] rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-[#83a783] rounded-full"></div>
                </div>

              </div>

              {/* Tasks */}
              <div className="space-y-4">

                <div className="flex items-center gap-3 p-4 bg-[#f6f8f4] rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-[#83a783] text-white flex items-center justify-center text-xs">
                    ✓
                  </span>

                  <span className="text-[#92998e] line-through">
                    Complete morning routine
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-[#f6f8f4] rounded-xl">
                  <span className="w-5 h-5 rounded-full border-2 border-[#83a783]"></span>

                  <span className="text-[#424b40] font-medium">
                    Learn React.js
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-[#f6f8f4] rounded-xl">
                  <span className="w-5 h-5 rounded-full border-2 border-[#83a783]"></span>

                  <span className="text-[#424b40] font-medium">
                    Build a Todo App
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-[#f6f8f4] rounded-xl">
                  <span className="w-5 h-5 rounded-full bg-[#83a783] text-white flex items-center justify-center text-xs">
                    ✓
                  </span>

                  <span className="text-[#92998e] line-through">
                    Read documentation
                  </span>
                </div>

              </div>

              <div className="mt-8 p-5 bg-[#eaf1e8] rounded-2xl">

                <p className="text-[#557455] font-semibold">
                  ✨ Keep Going!
                </p>

                <p className="text-sm text-[#788777] mt-2">
                  Small steps every day lead to big results.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#e2e5dc] mt-10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#384638]">
              Focus
            </h3>
            <p className="text-[#858b81] mt-2">
              Concentrate on what matters.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#384638]">
              Organize
            </h3>
            <p className="text-[#858b81] mt-2">
              Keep your tasks organized.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#384638]">
              Achieve
            </h3>
            <p className="text-[#858b81] mt-2">
              Turn your goals into reality.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;

