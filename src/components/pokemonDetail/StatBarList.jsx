import BarProgresStat from "./BarProgresStat";

const StatBarList = ({ stats }) => {
  return (
    <section className="p-2 w-[min(90%,_600px)] mx-auto">
      <h2>Stats</h2>
      <section>
        {stats?.map((stat) => (
          <BarProgresStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};
export default StatBarList;
