import Result from "../components/Result";
import Summary from "../components/Summary";
import data from "../../data.json";

const Main: React.FC = () => {
  const totalScore = Math.round(
    data.reduce((sum, item) => sum + item.score, 0) / data.length,
  );

  return (
    <main className="min-w-screen flex min-h-screen items-center justify-center bg-[hsl(221,100%,96%)] p-0 lg:p-4">
      <div className="flex h-[100vh] w-full max-w-3xl flex-col overflow-hidden bg-white shadow-lg md:h-auto md:flex-row md:rounded-3xl">
        <div className="md:w-1/2">
          <Result score={totalScore} />
        </div>
        <div className="md:w-1/2">
          <Summary data={data} />
        </div>
      </div>
    </main>
  );
};

export default Main;
