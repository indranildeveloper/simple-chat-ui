import { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api", {
        method: "GET",
      });

      const userRes = await response.json();

      setUser(userRes.results);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div className="border-b p-4">
      {!loading && (
        <div className="flex items-center gap-4 justify-between">
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src={user[0].picture.large} />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold">
              {user[0].name.first} {user[0].name.last}
            </h4>
            <p>{user[0].email}</p>
          </div>

          <div className="drawer relative z-[99999999999999999999999999]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ml-auto block md:hidden">
              <label
                htmlFor="my-drawer"
                className="btn btn-square drawer-button"
              >
                <FaBars size={20} />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <div className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
