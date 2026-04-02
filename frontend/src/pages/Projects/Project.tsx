import { Box, Container } from "@mui/system";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { Project1 } from "../../components/Projects/static/Project1";
import { Project2 } from "../../components/Projects/static/Project2";
import { Project3 } from "../../components/Projects/static/Project3";
import projectDetailStyles from "../../styles/projectDetailStyles";

const Project = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const { classes } = projectDetailStyles();

  const pages = [
    { name: "About", link: "/#about" },
    { name: "Works", link: "/#works" },
  ];

  const projectComponents = [Project1, Project2, Project3];

  const SelectedProject = projectComponents[projectId];

  return (
    <Container>
      <Navbar pages={pages} />

      <Box className={classes.projectContainer}>
        {SelectedProject ? (
          <SelectedProject />
        ) : (
          <div>Project not found. Please check the URL and try again.</div>
        )}
      </Box>
    </Container>
  );
};

export default Project;
