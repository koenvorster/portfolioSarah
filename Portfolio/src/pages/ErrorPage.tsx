import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=" sectionContainer2 flex items-center justify-center min-h-screen bg-[#1B3E37]">
            <div className="testing-item text-center p-8 max-w-lg">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <div className="w-16 h-1 bg-[#CC5C2D] mx-auto mb-6"></div>

                <h2 className="text-2xl font-semibold mb-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-300 mb-8">
                    The page you are looking for is still work in progress or does not exist.
                </p>

                <Link
                    to="/"
                    className="card-button inline-block hover:bg-[#CC5C2D]"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;