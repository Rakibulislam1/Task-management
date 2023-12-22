import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mb-16 bg-cover object-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/ZVq1vK6/3d-clipboard-with-todo-checklist-paper-green-tick.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">
              Unlock Your Productivity Potential with Our Todo List Website!{" "}
            </h1>
            <p className="mb-5">
              Seamlessly organize your day, week, and beyond with our
              feature-rich platform.
            </p>
            <Link to='/dashboard'><button className="btn btn-primary">Let’s Explore</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
