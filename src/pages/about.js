import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            const message = "Are you sure you want to leave?";
            event.returnValue = message; // This is for browser refresh/navigation
            return message;
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    const handleNavigation = (event) => {
        event.preventDefault();
        const confirmLeave = window.confirm("Are you sure you want to leave?");
        if (confirmLeave) {
            navigate(event.currentTarget.href); // Proceed with navigation
        }
    };

    return (
        <div>
            <h2>About Page</h2>
            <a href="#" onClick={handleNavigation}>Go Home</a>
        </div>
    );
};

export default About;
