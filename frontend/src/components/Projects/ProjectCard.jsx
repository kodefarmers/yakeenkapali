import { Box, Typography, Card, CardMedia, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// ─── Project Card ─────────────────────────────────────────────────────────────

import { Link as RouterLink } from "react-router-dom";

export const ProjectCard = ({ id, title, description, image, link }) => {
  return (
    <Card
      component={RouterLink}
      to={link}
      sx={{
        textDecoration: "none",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease",
        height: "100%",
        width: "100%",
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
