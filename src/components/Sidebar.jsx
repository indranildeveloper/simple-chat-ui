import { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://randomuser.me/api?results=6", {
        method: "GET",
      });

      const usersRes = await response.json();
      setUsers(usersRes.results);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-md h-screen p-6 border-r hidden md:block">
      <div className="flex items-center gap-4">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="/avatar.jpg" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Indranil Halder</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="input input-bordered input-primary flex-1"
          placeholder="Search Friends"
        />
        <button className="btn btn-square btn-primary">
          <FaSearch />
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {!loading &&
          users.map((user) => (
            <div
              key={user.email}
              className="flex items-center gap-4 transition-all duration-300 hover:bg-gray-100 p-4 rounded-lg cursor-pointer"
            >
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={user.picture.large} />
                </div>
              </div>
              <h4 className="text-lg font-semibold">
                {user.name.first} {user.name.last}
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
