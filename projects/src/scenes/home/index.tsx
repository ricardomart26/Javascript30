import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
    title: string;
    image: string;
    route: string;
}

const Home = () => {
    

    const navigate = useNavigate();

    const projects: Project[] = [{
        title: 'Drum Kit',
        image: 'images/drumkit.png',
        route: '/drumkit',
    },
    {
        title: 'JavaScript Clock',
        image: 'images/jsClock.png',
        route: '/jsClock',
    },
    {
        title: 'Css Variables',
        image: 'images/cssVariables.png',
        route: '/cssVariables',
    },
    {
        title: 'Flex panels',
        image: 'images/flexPanels.png',
        route: '/flexPanels',
    },
    {
        title: 'Search Bar',
        image: 'images/searchBar.png',
        route: '/searchBar',
    }]



    const projectsStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: "wrap",
        alignContent: 'flex-start',
        gap: "10px"
    }

    const projectBoxStyle: CSSProperties = {
        border: "black 4px solid",
        width: "30vh",
        height: "30vh",
        listStyleType: "none",
    }

    const handleClickProject = (e: React.MouseEvent<HTMLLIElement>, project: Project) => {
        navigate(project.route);
    }

    const renderProjectsBox = () => {
        return (projects.map((project, index) => {
            return (<>
                <li style={projectBoxStyle} onClick={(e: React.MouseEvent<HTMLLIElement>) => handleClickProject(e, project)}>
                    <img src={project.image}></img>
                    <p>{project.title}</p>
                </li>
            </>);
        }));
    }
    
    
    return (<div>
        <ul style={projectsStyle}>
            {renderProjectsBox()}
        </ul>
    </div>);
}

export default Home;