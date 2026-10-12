import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <h1>Student List</h1>

            <ul>
                <li>
                    <Link to="/student/Alexa">Alexa</Link>
                </li>
                <li>
                    <Link to="/student/Riya">Riya</Link>
                </li>
                <li>
                    <Link to="/student/Akash">Akash</Link>
                </li>
            </ul>

            <button
                className="btn btn-primary"
                onClick={() => navigate("/student/Riya")}
            >
                Go to Riya
            </button>
        </div>
    );
}

export default Home;