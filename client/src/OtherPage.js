import { Link } from "react-router-dom";

let OtherPage = () => {
  return (
    <div>
      Im some other page
      <Link to="/">Go back home!</Link>
    </div>
  );
};

export default OtherPage;
