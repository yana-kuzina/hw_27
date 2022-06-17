import { Outlet, Link } from "react-router-dom";

const Hotels = () => {
  return (
    <div>
      <h1>Hotels</h1>;
      <ul>
        <li>
          <Link to="/hotels/1">Hotel #1</Link>
        </li>
        <li>
          <Link to="/hotels/2">Hotel #2</Link>
        </li>
        <li>
          <Link to="/hotels/3">Hotel #3</Link>
        </li>
      </ul>
      ;
      <Outlet />
    </div>
  );
};

export default Hotels;
