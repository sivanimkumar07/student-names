import { useParams, Link } from "react-router-dom";

function Student() {
    const { name } = useParams();

    return (
        <div className="container mt-4">
            <h1>Welcome, {name}!</h1>

            <Link to="/" className="btn btn-primary">
                Back to Home
            </Link>
        </div>
    );
}

export default Student;