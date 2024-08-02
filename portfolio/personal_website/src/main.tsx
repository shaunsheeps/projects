import { MainLayout, SectionContainer } from "components";
import { SectionIdEnum } from "types";
import { IntroSection } from "sections";
import { Divider } from "@mui/material";

const sections = [
    {
        sectionId: SectionIdEnum.intro,
        component: <IntroSection />
    },
    {
        sectionId: SectionIdEnum.about,
        component: <IntroSection />
    },
    {
        sectionId: SectionIdEnum.projects,
        component: <IntroSection />
    },
    {
        sectionId: SectionIdEnum.resume,
        component: <IntroSection />
    },
    {
        sectionId: SectionIdEnum.interests,
        component: <IntroSection />
    },
    {
        sectionId: SectionIdEnum.contact,
        component: <IntroSection />
    }
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
}