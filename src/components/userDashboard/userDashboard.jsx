import "../userDashboard/userDashboard.scss";

//User Dashboard Component

function UserDashboard() {
  return (
    <section id="userDashboard">
      <h1>Welcome Back!</h1>
      <div className="dashboard__wrap">
        <div className="tracker__wrap">
          <div className="tracker">
            <p>New Tracker Session</p>
          </div>

          <div className="tracker__data">
            <p>See My Tracker Data</p>
          </div>
        </div>

        <div className="article">
          <p>Article</p>
        </div>
      </div>
      
      <div className="shop__cta">
        <p>Shop Now</p>
      </div>
    </section>
  );
}

export default UserDashboard;
