import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { projectsData } from "../../constants/projects";

// ─── Project Card ─────────────────────────────────────────────────────────────

import { Link as RouterLink } from "react-router-dom";

export const ProjectCard = ({ id, title, description, image }) => {
  return (
    <Card
      component={RouterLink}
      to={`/projects/${id - 1}`}
      sx={{
        textDecoration: "none",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 140,
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* Title + Description */}
        <Box>
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.5 }}>
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "0.85rem",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Bottom Arrow */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1.5,
          }}
        >
          <Typography
            variant="body2"
            fontWeight={600}
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            View Project
          </Typography>

          <IconButton
            size="small"
            sx={{
              ml: 0.5,
              color: "primary.main",
              bgcolor: "primary.50",
              width: 26,
              height: 26,
              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff",
              },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
// ─── Project Section ──────────────────────────────────────────────────────────

export const ProjectSection = () => {
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
        Projects
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={3}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
