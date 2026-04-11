import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { caseStudyData } from "../../constants/case-study";
import { Link as RouterLink } from "react-router-dom";

const CaseStudyCard = ({ id, title, description, link, image, tag }) => {
  return (
    <Card
      component={RouterLink}
      to={`/case-study/${id - 1}`}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "stretch",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        textDecoration: "none",

        "&:hover": {
          boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
          transform: "translateY(-2px)",
        },
        minHeight: { xs: "auto", sm: 200 },
      }}
    >
      {/* Left: Text Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: 2.5, sm: 3 },
        }}
      >
        {/* Top: Tag + Title + Description */}
        <Box>
          {tag && (
            <Chip
              label={tag}
              size="small"
              sx={{
                mb: 1.5,
                fontSize: "0.7rem",
                fontWeight: 600,
                bgcolor: "primary.50",
                color: "primary.main",
                borderRadius: 1,
              }}
            />
          )}

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              lineHeight: 1.4,
              mb: 1,
              fontSize: { xs: "0.95rem", sm: "1rem" },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1.65,
            }}
          >
            {description}
          </Typography>
        </Box>

        {/* Bottom: Arrow Link */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            fontWeight={600}
            sx={{
              color: "primary.main",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Read full study
          </Typography>

          <IconButton
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              ml: 0.5,
              color: "primary.main",
              bgcolor: "primary.50",
              width: 28,
              height: 28,
              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff",
              },
              transition: "all 0.2s ease",
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: 15 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Right: Image */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: { xs: "100%", sm: 500 },
          height: { xs: 220, sm: "auto" },
          minWidth: { sm: 220 },
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    </Card>
  );
};

// ─── CaseStudySection ─────────────────────────────────────────────────────────

export const CaseStudySection = () => {
  return (
    <Box
      id="case-study"
      component="section"
      sx={{
        py: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      {/* Section Heading */}
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
            width: 48,
            height: 4,
            borderRadius: 2,
            bgcolor: "primary.main",
          },
        }}
      >
        Case Studies
      </Typography>

      {/* Cards Stack */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {caseStudyData.map((card, idx) => (
          <CaseStudyCard key={idx} {...card} />
        ))}
      </Box>
    </Box>
  );
};