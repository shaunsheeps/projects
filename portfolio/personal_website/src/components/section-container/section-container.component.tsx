import { Box, Container} from '@mui/material';
import { SectionIdEnum } from 'types';

export type SectionContainerProps = {
    children: React.ReactNode;
    sectionId: SectionIdEnum;
    bgColor?: string; 
};

const options = {};

export const SectionContainer : React.FC<SectionContainerProps> = ({children, sectionId, bgColor}) => {

    return (
        <div id={sectionId} key={sectionId} style={{ backgroundColor : bgColor}} >
            <Container >
                <Box id={sectionId} minHeight={"100vh"}>
                    {children}
                </Box>
            </Container>
        </div>
    );
};
