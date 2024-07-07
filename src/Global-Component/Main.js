import Project from "./Inside-Component/Project";
import Online from "./Inside-Component/OnlineCourses";

function Main(){
    return(
        <div className="container">
            <div className="body">
                <div className="education">
                    <h2>Education</h2>
                    <div>
                        <h5>2022-11</h5>
                        <h3>Tishreen University</h3>
                        <span>Bachelor - Information Technology</span>
                    </div>
                    <p>
                        I am a recent college graduate (IT), And looking for a new job within the field
                        of Front End or Back End Or Full Stack or Graphic Design or Flutter
                        or any thing close.
                    </p>
                    <p>Certificate link:</p>
                    <a href="https://mega.nz/file/Y78GyTCI#DlK8ONSD3n8-e2ulvbsCH7onCtk6ifdO45MdTmQdlqg">https://mega.nz/file/Y78GyTCI#DlK8ONSD3n8-e2ulvbsCH7onCtk6ifdO45MdTmQdlqg</a>
                </div>
                <div className="experience">
                    <h2>Experience</h2>
                    <p>One year as a Freelancer</p>
                </div>
                <div className="training">
                    <h2>Training Courses</h2>
                    <p>10-12-2023 =={'>'} 1-3-2024</p>
                    <h3>FrontEnd training at Step Alpha company</h3>
                    <p>Include: HTML,CSS,CSS Responsive,Bootstarp,JavaScript,API,JSON,jQuery,React</p>
                    <p>Company Location:</p>
                    <a href="https://www.step-alpha.com">step-alpha.com</a>
                </div>
                <div>
                    <h2>Online Courses</h2>
                    <Online
                        title="Web"
                        content="HTML,CSS,Bootstrap,JavaScript,ES6,jQuery,React"
                        description="It is a file that include all courses that I have been learned about web languages"
                        typeLink="File link:"
                        link="https://mega.nz/file/h6NDya4L#fhMMZkTSExZMKDjM940qLJJCD3oNAfiLlGKc_T0zsCk"
                    />
                    <Online
                        title="Graphic"
                        content="Photoshop,Illustrator,Indesign,Design Principles, Optical feeding"
                        description="It is a file that include all courses that I have been learned about Graphic design"
                        typeLink="File link:"
                        link="https://mega.nz/file/9ikhxaiQ#BDr0ycgIV72Y7QUq29_49pnxih6g-IDSwdDw2JdKNOM"
                    />
                    <div className="onlineCourses">
                        <div>
                            <p>2021-12</p>
                            <h3>Perl programming language</h3>
                            <a href="https://www.SaleWebDesign.com">SaleWebDesign.com</a>
                        </div>
                        <p>the course talks about basics ant syntax in perl language</p>
                    </div>
                </div>
            </div>
            <div className="sideBar">
                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>jQurey</li>
                        <li>React</li>
                        <li>Word - Excel</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Indesign</li>
                        <li>Good working with team</li>
                        <li>Work under pressure</li>
                        <li>Project Management</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>
                <div className="achievs">
                    <h3>Achievements</h3>
                    <Project
                        history="2021-8-10"
                        title="Designing a special network for the Faculty of Informatics Engineering-Quarterly project"
                        description="The project talks about network design, so it helps to understand the basics of networks such as cables, devices, etc., as well as informs us how The network design is simple"
                        link="https://mega.nz/folder/t6djVDCA#RR72HnWfYMrbE0X33raMFg"
                    />
                    <Project
                        history="2022-8-10"
                        title="Steganography in IPv-6 graduated project"
                        description="The project explains how to hide data in Ipv6 in many ways"
                        link="https://mega.nz/file/QytkQIQA#u6SVZdR4XqYwdnweuuDhnn-hYLfqPrNM6q9KZ_61-VM"
                    />
                </div>
                <div className="languages">
                    <h3>Languages</h3>
                    <ul>
                        <li>English</li>
                        <li>Arabic</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main;
