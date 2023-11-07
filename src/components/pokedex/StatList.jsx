const StatList = ({ stats }) => {
  return (
    <ul className="grid gap-2 grid-cols-3 text-xs p-2 ">
      {stats?.map((stat) => (
        <li key={stat.name}>
          <h4 className="capitalize line-clamp-1 font-extrabold">
            {stat.name}
          </h4>
          <span className="font-semibold">{stat.value}</span>
        </li>
      ))}
    </ul>
  );
};
export default StatList;
