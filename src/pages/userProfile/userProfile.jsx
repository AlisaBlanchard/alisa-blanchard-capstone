import '../userProfile/userProfile.scss';

//UserProfile Page

function UserProfile() {
    return (
        <section className="userProfile">
            <div className="user__wrap">
                <img src="#" alt="Profile Picture" />
                <div className="user__info">
                    <p>User Info</p>
                </div>
            </div>
            <div className="data__wrap">
                <div className="tracker__dropdown">tracker dropdown</div>
                <div className="data__button">Data Visualization Button</div>
                <div className="data__visualizer">CHARTS</div>
            </div>
        </section>
    )
}

export default UserProfile;