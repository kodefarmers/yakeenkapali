import { Box, Typography, Grid } from "@mui/material";
import { projectsData } from "../../constants/projects";
import { ProjectCard } from "./ProjectCard";

// ─── Project Card ─────────────────────────────────────────────────────────────

export const ProjectSection = () => {
  return (
    <Box
      id="project"
      component="section"
      sx={{
        py: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "100%",
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
        Projects
      </Typography>
      {/* Grid Layout */}
      <Grid container spacing={3} alignItems="stretch">
        {projectsData.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            sx={{ display: "flex" }}
          >
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>{" "}
    </Box>
  );
};
