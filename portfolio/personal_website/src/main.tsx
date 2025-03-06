import { MainLayout, SectionContainer } from "components";
import { SectionIdEnum } from "types";
import { AboutSection, ProjectsSection, ResumeSection, InterestsSection, ContactSection } from "components/section-container/sections";
import { Divider } from "@mui/material";

enum SectionBgColors {
    Blue = "#111827",
    Black = "#020617",
}


const sections = [
    {
        sectionId: SectionIdEnum.about,
        component: <AboutSection />,
        bgColor: SectionBgColors.Blue,
    },
    {
        sectionId: SectionIdEnum.projects,
        component: <ProjectsSection />,
        bgColor: SectionBgColors.Black,
    },
    {
        sectionId: SectionIdEnum.resume,
        component: <ResumeSection/>,
        bgColor: SectionBgColors.Blue,
    },
    {
        sectionId: SectionIdEnum.interests,
        component: <InterestsSection/>,
        bgColor: SectionBgColors.Black,
    },
    {
        sectionId: SectionIdEnum.contact,
        component: <ContactSection />,
        bgColor: SectionBgColors.Blue,
    },
];

export const Main: React.FC = () => {
    return <MainLayout>
        {sections.map(({component, sectionId, bgColor}) => {
            return <SectionContainer sectionId={sectionId} key={sectionId} bgColor={bgColor}>
                <Divider />
                {component}
            </SectionContainer>; 
        })}
         </MainLayout>;
};
