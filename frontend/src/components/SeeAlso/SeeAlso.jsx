import { Box, Grid, Typography } from "@mui/material";
import { projectsData } from "../../constants/projects";
import { ProjectCard } from "../Projects/ProjectCard";
import { useLocation, useParams } from "react-router-dom";
import { caseStudyAsProject } from "../../constants/case-study";

export const SeeMore = () => {
  const { id } = useParams();
  const projectId = Number(id);

  const location = useLocation();
  const isProjectRoute = location.pathname.includes("project");

  const finalProject = isProjectRoute
    ? [
        ...projectsData.filter((project) => project.id !== projectId + 1),
        ...caseStudyAsProject,
      ]
    : projectsData;

  return (
    <Box
      component="section"
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: 1100,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={500}
        sx={{
          mb: 4,
          letterSpacing: "-0.5px",
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            display: "block",
            mt: 0.75,
            width: 40,
            height: 4,
            borderRadius: 2,
            bgcolor: "primary.main",
          },
        }}
      >
        See Also
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={3}>
        {finalProject.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
