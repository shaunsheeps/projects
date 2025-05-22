import { MainLayout, SectionContainer } from "components";
import { SectionIdEnum } from "types";
import { AboutSection, ProjectsSection, ResumeSection, InterestsSection, ContactSection } from "components/section-container/sections";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Divider } from "@mui/material";
import Archive from "./pages/archive";
import { colorScheme } from "types";



const sections = [
    {
        sectionId: SectionIdEnum.about,
        component: <AboutSection />,
        bgColor: colorScheme.dark_blue,
    },
    {
        sectionId: SectionIdEnum.projects,
        component: <ProjectsSection />,
        bgColor: colorScheme.black,
    },
    {
        sectionId: SectionIdEnum.resume,
        component: <ResumeSection/>,
        bgColor: colorScheme.dark_blue,
    },
    {
        sectionId: SectionIdEnum.interests,
        component: <InterestsSection/>,
        bgColor: colorScheme.black,
    },
    {
        sectionId: SectionIdEnum.contact,
        component: <ContactSection />,
        bgColor: colorScheme.dark_blue,
    },
];

const Home: React.FC = () => (
    <MainLayout>
        {sections.map(({component, sectionId, bgColor}) => {
            return <SectionContainer sectionId={sectionId} key={sectionId} bgColor={bgColor}>
                <Divider />
                {component}
            </SectionContainer>; 
        })}
    </MainLayout>
)


export const Main: React.FC = () => {
    return (
    <BrowserRouter>
        <MainLayout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Archive/>} />
         </Routes>
         </MainLayout>
     </BrowserRouter>

        
)};
