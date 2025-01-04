import { MainLayout, SectionContainer } from "components";
import { SectionIdEnum } from "types";
import { AboutSection, ProjectsSection, ResumeSection, InterestsSection, ContactSection } from "components/section-container/sections";
import { Divider } from "@mui/material";

const sections = [
    {
        sectionId: SectionIdEnum.about,
        component: <AboutSection />,
    },
    {
        sectionId: SectionIdEnum.projects,
        component: <ProjectsSection />,
    },
    {
        sectionId: SectionIdEnum.resume,
        component: <ResumeSection/>,
    },
    {
        sectionId: SectionIdEnum.interests,
        component: <InterestsSection/>,
    },
    {
        sectionId: SectionIdEnum.contact,
        component: <ContactSection />,
    },
];

export const Main: React.FC = () => {
    return <MainLayout>
        {sections.map(({component, sectionId}) => {
            return <SectionContainer sectionId={sectionId} key={sectionId}>
                <Divider />
                {component}
            </SectionContainer>; 
        })}
         </MainLayout>;
};
