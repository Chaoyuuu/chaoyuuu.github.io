import {useEffect} from "react";

function ToggleButton() {

    function toggleTheme() {
        const html = document.documentElement;
        const icon = document.getElementById('theme-icon');
        const currentTheme = html.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            html.removeAttribute('data-theme');
            icon.textContent = '☀️';
        } else {
            html.setAttribute('data-theme', 'dark');
            icon.textContent = '🌙';
        }
    }


    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = null; // Note: localStorage not supported in artifacts
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('theme-icon').textContent = '🌙';
        }
    }, []);

    return (
        <div className="theme-toggle">
            <button className="toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
                <div className="toggle-slider">
                    <span id="theme-icon"> ☀️</span>
                </div>
            </button>
        </div>
    )
}



export default ToggleButton
