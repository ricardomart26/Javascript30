import { CSSProperties } from "react";




interface Project {
    title: string;
    image: string;
    route: string;
}



const Home = () => {
    
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
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: "wrap",
    }

    const projectBoxStyle: CSSProperties = {
        border: "black 2px solid",
        width: "10vh",
        height: "10vh",
    }


    const renderProjectsBox = () => {
        return ( projects.map((project, index) => {
            <>
                <li style={projectBoxStyle}/>
            </>
        }));
    }
    
    
    return (<div>
        <ul>
            
        </ul>
    </div>);
}

export default Home;