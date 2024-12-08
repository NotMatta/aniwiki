interface UserStatsProps {
  current: number;
  planning: number;
  completed: number;
  dropped: number;
  paused: number;
}

const UserStats  = ({current,planning,completed,dropped,paused,}:UserStatsProps) => {
  const totalUsers = current + planning + completed + dropped + paused;
  const currentPercentage = ((current / totalUsers) * 100).toFixed(2);
  const planningPercentage = ((planning / totalUsers) * 100).toFixed(2);
  const completedPercentage = ((completed / totalUsers) * 100).toFixed(2);
  const droppedPercentage = ((dropped / totalUsers) * 100).toFixed(2);
  const pausedPercentage = ((paused / totalUsers) * 100).toFixed(2);

  return (
    <div className="bg-gray-100 p-4 rounded-lg font-semibold text-gray-400">
      <div className="flex justify-between mb-4">
        <div className="flex items-center flex-col">
          <div className="bg-green-500 text-white px-4 py-2 rounded-md">
            Current
          </div>
          <p><span className="text-green-500">{current}</span> Users</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Planning
          </div>
          <p><span className="text-blue-500">{planning}</span> Users</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Completed
          </div>
          <p><span className="text-purple-500">{completed}</span> Users</p>
        </div>
        <div className="flex items-center flex-col">
          <div className="bg-pink-500 text-white px-4 py-2 rounded-md">
            Dropped
          </div>
          <p><span className="text-pink-500">{dropped}</span> Users</p>
        </div>
        <div className="hidden md:flex items-center flex-col">
          <div className="bg-red-500 text-white px-4 py-2 rounded-md">
            Paused
          </div>
          <p><span className="text-red-500">{paused}</span> Users</p>
        </div>
      </div>
      <div className="h-4 rounded-full overflow-hidden bg-gray-200 flex">
        <div
          className="h-full bg-green-500"
          style={{ width: `${currentPercentage}%` }}
        />
        <div
          className="h-full bg-blue-500"
          style={{ width: `${planningPercentage}%` }}
        />
        <div
          className="h-full bg-purple-500"
          style={{ width: `${completedPercentage}%` }}
        />
        <div
          className="h-full bg-pink-500"
          style={{ width: `${droppedPercentage}%` }}
        />
        <div
          className="h-full bg-red-500"
          style={{ width: `${pausedPercentage}%` }}
        />
      </div>
    </div>
  );
};


export default UserStats
