import { Grid, Link } from "@mui/material"
import { Title } from "./Login"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Contact = () => {
    return (
        <>
            <Title>Contact</Title>
            <Grid container>
                <Grid item xs={12}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>How to contact me</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                E-mail: 
                                <Link href="mailto:s.demunck@gmail.com">
                                    s.demunck@gmail.com
                                </Link>
                            </Typography>
                            <Typography>
                                Github: 
                                <Link href="https://github.com/Sjimdemunck/" target="_blank" rel="noopener">
                                    <GitHubIcon/>
                                </Link>
                            </Typography>
                            <Typography>
                                LinkedIn: 
                                <Link href="https://www.linkedin.com/in/sjim-de-munck/" target="_blank" rel="noopener">
                                   <LinkedInIcon/>
                                </Link>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
        </Grid>
    </>
  );
}