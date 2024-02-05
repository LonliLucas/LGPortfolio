function Resume() {
    const downloadResume = () => {
        const resumeFile = "LucasGResume.pdf";
        const anchor = document.createElement('a');

        anchor.href = resumeFile;
        const fileName = resumeFile.substring(resumeFile.lastIndexOf('/') + 1)
        anchor.download = fileName;

        document.body.appendChild(anchor);
        anchor.click();

        document.body.removeChild(anchor);

    };
    return (
        <div className="flex flex-col items-center body-background  py-6">
            <h3 className="text-xl">Here's a few things I'm proficient in:</h3>
            <ul className="text-lg flex flex-col items-center">
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>React</li>
                <li>etc.</li>
            </ul>
            <button onClick={downloadResume} className="resume-button text-xl rounded-lg p-2 mt-10">Download My Resume!</button>
        </div>
    );
}

export default Resume;
