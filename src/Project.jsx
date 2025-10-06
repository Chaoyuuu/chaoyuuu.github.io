function Project() {

    return (
        <>
            <section className="projects">
                <h2 className="section-title">Featured Projects</h2>

                <div className="project-card">
                    <h3 className="project-title">CloudSync Platform</h3>
                    <p className="project-desc">
                        A real-time collaboration platform enabling teams to work together seamlessly across devices.
                        Built with WebSockets for instant synchronization and implemented end-to-end encryption for
                        security.
                    </p>
                    <div className="project-tech">
                        <span className="tech-badge">React</span>
                        <span className="tech-badge">TypeScript</span>
                        <span className="tech-badge">WebSocket</span>
                        <span className="tech-badge">PostgreSQL</span>
                        <span className="tech-badge">Docker</span>
                    </div>
                    {/*<div className="project-links">*/}
                    {/*    <a href="#" className="project-link" title="GitHub">🔗</a>*/}
                    {/*    <a href="#" className="project-link" title="Live Demo">↗</a>*/}
                    {/*</div>*/}
                </div>

                <div className="project-card">
                    <h3 className="project-title">DevMetrics Dashboard</h3>
                    <p className="project-desc">
                        Analytics dashboard providing insights into development team productivity and code quality
                        metrics.
                        Integrates with GitHub, Jira, and other tools to give a comprehensive view of project health.
                    </p>
                    <div className="project-tech">
                        <span className="tech-badge">Vue.js</span>
                        <span className="tech-badge">Python</span>
                        <span className="tech-badge">FastAPI</span>
                        <span className="tech-badge">MongoDB</span>
                        <span className="tech-badge">Chart.js</span>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Project
