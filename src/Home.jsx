
function Home() {
    return (
        <>
            <header>
                <h1>Alex Chen</h1>
                <p className="subtitle">Software Engineer & Full-Stack Developer</p>
            </header>

            <section className="bio">
                <div className="profile-image">
                    <div className="profile-image-placeholder">👨‍💻</div>
                    {/*Replace with: <img src="your-selfie.jpg" alt="Alex Chen" style="width: 100%; height: 100%; object-fit: cover;">*/}
                </div>
                <p>
                    I'm a passionate software engineer specializing in building elegant, scalable web applications.
                    With 6+ years of experience, I love transforming complex problems into intuitive digital
                    experiences.
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source, or
                    capturing moments through photography.
                </p>
                <div className="tags">
                    <span className="tag">React</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Python</span>
                    <span className="tag">Cloud Architecture</span>
                </div>
            </section>
        </>
    )
}

export default Home