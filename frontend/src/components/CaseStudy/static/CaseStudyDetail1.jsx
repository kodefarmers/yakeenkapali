import { Box, Typography } from "@mui/material";
import caseStudyDetail1Styles from "../../../styles/caseStudyDetailStyles";

// ── Static data ───────────────────────────────────────────────────────────────

const heroMeta = [
  { label: "Role", value: "Design Lead" },
  { label: "Platform", value: "Mobile App" },
  { label: "Users", value: "Supervisors, General\nEmployees, Drivers" },
  { label: "Duration", value: "6 Months" },
];

const problems = [
  {
    title: "Manual Recording",
    text: "Supervisors spent 2+ hours daily on manual data entry from paper logs into spreadsheets.",
  },
  {
    title: "Fragmented Comms",
    text: "Critical shift changes and safety updates were lost in endless Viber group threads.",
  },
  {
    title: "Slow Reporting",
    text: "Operational insights were delayed by 48-72 hours, making proactive resource management impossible.",
  },
];

const roles = [
  {
    title: "Team Leadership",
    text: "Managed a team of two UI designers, ensuring visual consistency and adherence to Material Design standards.",
  },
  {
    title: "UX Strategy & Logic",
    text: "Owned high-level UX decisions, mapping out 50+ user flows and resolving complex backend logic conflicts.",
  },
  {
    title: "Stakeholder Management",
    text: "Bridged the gap between the demolition field supervisors and the engineering team to ensure technical feasibility.",
  },
];

const journeyPhases = [
  {
    phase: "Phase 1",
    title: "Optimizing within Constraints",
    body: [
      "Initial efforts were heavily restricted by an existing, rigid design system that left little room for visual exploration. The priority was functional survival: standardizing input patterns across a disparate ecosystem of tools.",
      "The primary challenge lay in engineering complex logic for features like automated Clock-in/out based on geofencing, intricate Subcontractor supervision workflows, and a highly specialized Google Maps-inspired interface for debris removal drivers—all while working within the legacy component library.",
    ],
    insight: {
      label: "Key Insight",
      text: '"The problem wasn\'t just UI — it was core flow logic and system thinking."',
    },
  },
  {
    phase: "Phase 2",
    title: "The Scalable Redesign",
    body: [
      'With proof of concept established, we moved into a total structural overhaul. We orchestrated a strategic shift from "feature-filling"—simply checking boxes—to "context-awareness." The interface was redesigned to dynamically adapt based on the user\'s current role and environmental stressors.',
      "A foundational move was the migration to Material Design 3, providing the token-based flexibility needed for long-term scalability. This wasn't merely an aesthetic upgrade; it was a targeted solution for the problems identified in Phase 1, significantly reducing cognitive load for supervisors managing both crew logistics and safety reporting simultaneously.",
    ],
    insight: null,
  },
];

const m3Colors = ["#6C77E8", "#E0E0FF", "#5D5F64", "#DBE4E7"];

const impactStats = [
  { number: "-65%", label: "Report Submission Time" },
  { number: "+40%", label: "Task Completion Rate" },
  { number: "-30%", label: "User Errors Reported" },
];

const learnings = [
  {
    num: "01",
    text: "Systems thinking is more valuable than pixel perfection in industrial UX. If the underlying data flow is broken, the cleanest UI won't save it.",
  },
  {
    num: "02",
    text: "Inclusivity means designing for high-stress, noisy, and physical environments, not just for desk-bound users.",
  },
];

// ── Shared sub-components ─────────────────────────────────────────────────────

/** Reusable left-column heading block used across two-col sections */
const SectionLeft = ({ eyebrow, heading, accentHeading, classes }) => (
  <Box className={classes.sectionLeftCol}>
    <Typography className={classes.sectionEyebrow}>{eyebrow}</Typography>
    <Typography
      className={classes.sectionHeading}
      style={accentHeading ? { color: "#6C77E8" } : undefined}
    >
      {heading}
    </Typography>
  </Box>
);

// ── Component ─────────────────────────────────────────────────────────────────

export const CaseStudyDetail1 = () => {
  const { classes } = caseStudyDetail1Styles();

  return (
    <Box className={classes.pageWrapper}>
      {/* ── NAVBAR ── */}
      <Box className={classes.navbar}>
        <Typography className={classes.navbarName}>Yakeen Kapali</Typography>
      </Box>

      {/* ── HERO ── */}
      <Box className={classes.heroSection}>
        {/* Eyebrow */}
        <Box className={classes.heroLabel}>
          <Box className={classes.heroLabelLine} />
          Case Study 01: Logistics &amp; Operations
        </Box>

        {/* Title */}
        <Typography className={classes.heroTitle}>
          {"Roster Management\nApp for Demolition\nOperations."}
        </Typography>

        {/* Subtitle */}
        <Typography className={classes.heroSubtitle}>
          A mobile app improving efficiency, reporting, and task management in
          high-intensity construction environments.
        </Typography>

        {/* Meta row */}
        <Box className={classes.heroMeta}>
          {heroMeta.map((m) => (
            <Box key={m.label} className={classes.heroMetaItem}>
              <Typography className={classes.heroMetaLabel}>
                {m.label}
              </Typography>
              <Typography className={classes.heroMetaValue}>
                {m.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Hero image / mockup placeholder */}
        <Box className={classes.heroImageWrapper}>
          <Box className={classes.heroImageGlow} />
          <Typography className={classes.heroImageLabel}>App Mockup</Typography>
        </Box>
      </Box>

      {/* ── OVERVIEW ── */}
      <Box className={classes.overviewSection}>
        <SectionLeft
          eyebrow="About"
          heading="Overview"
          accentHeading
          classes={classes}
        />
        <Typography className={classes.overviewText}>
          This project centered on digitizing the complex, high-stakes roster
          and reporting operations for a leading demolition firm. As the Design
          Lead, I directed the transition from legacy paper-based systems to a
          modern mobile interface that manages hundreds of daily shifts,
          equipment logistics, and safety compliance.
        </Typography>
      </Box>

      {/* ── THE PROBLEM ── */}
      <Box className={classes.problemSection}>
        <Box className={classes.problemSectionHeader}>
          <Typography className={classes.sectionEyebrow}>Discovery</Typography>
          <Typography className={classes.sectionHeading}>
            The Problem
          </Typography>
        </Box>
        <Box className={classes.problemCardsRow}>
          {problems.map((p) => (
            <Box key={p.title} className={classes.problemCard}>
              <Box className={classes.problemIconBar} />
              <Typography className={classes.problemCardTitle}>
                {p.title}
              </Typography>
              <Typography className={classes.problemCardText}>
                {p.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── MY ROLE ── */}
      <Box className={classes.roleSection}>
        <SectionLeft
          eyebrow="Responsibilities"
          heading="My Role"
          classes={classes}
        />
        <Box className={classes.roleItems}>
          {roles.map((r) => (
            <Box key={r.title} className={classes.roleItem}>
              <Box className={classes.roleIconDot} />
              <Box>
                <Typography className={classes.roleItemTitle}>
                  {r.title}
                </Typography>
                <Typography className={classes.roleItemText}>
                  {r.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── THE JOURNEY ── */}
      <Box className={classes.journeySection}>
        <Box className={classes.journeyHeadingRow}>
          <Typography className={classes.sectionEyebrow}>Process</Typography>
          <Typography className={classes.sectionHeading}>
            The Journey
          </Typography>
        </Box>

        {journeyPhases.map((phase, i) => (
          <Box key={phase.phase} className={classes.journeyItem}>
            {/* dot + connector */}
            <Box className={classes.journeyDotCol}>
              <Box className={classes.journeyDot} />
              {i < journeyPhases.length - 1 && (
                <Box className={classes.journeyConnector} />
              )}
            </Box>

            {/* content */}
            <Box className={classes.journeyContent}>
              <Box className={classes.journeyPhaseRow}>
                <Typography className={classes.journeyPhaseTag}>
                  {phase.phase}
                </Typography>
                <Typography className={classes.journeyPhaseTitle}>
                  {phase.title}
                </Typography>
              </Box>

              {phase.body.map((p, j) => (
                <Typography key={j} className={classes.journeyText}>
                  {p}
                </Typography>
              ))}

              {phase.insight && (
                <Box className={classes.journeyInsightBox}>
                  <Typography className={classes.journeyInsightLabel}>
                    {phase.insight.label}
                  </Typography>
                  <Typography className={classes.journeyInsightText}>
                    {phase.insight.text}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── DESIGN SOLUTIONS ── */}
      <Box className={classes.solutionsSection}>
        <Box style={{ marginBottom: 48 }}>
          <Typography className={classes.sectionEyebrow}>Output</Typography>
          <Typography className={classes.sectionHeading}>
            Design Solutions
          </Typography>
        </Box>

        {/* Card 1 – Simplified Flow Logic */}
        <Box className={classes.solutionCard}>
          <Typography className={classes.solutionCardTitle}>
            Simplified Flow Logic
          </Typography>
          <Typography className={classes.solutionCardText}>
            Redesigned complex workflows to remove unnecessary steps, create
            clear paths, and ensure users can complete tasks quickly and
            efficiently.
          </Typography>
          <Box
            style={{
              width: "100%",
              height: 360,
              background: "#111318",
              borderRadius: 16,
              border: "1px solid #232630",
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                fontSize: 12,
                color: "#4D5470",
                letterSpacing: "0.06em",
              }}
            >
              Flow Diagram Mockup
            </Typography>
          </Box>
        </Box>

        {/* Card 2 – Driver-First Experience */}
        <Box className={classes.solutionCard}>
          <Typography className={classes.solutionCardTitle}>
            Driver-First Experience
          </Typography>
          <Typography className={classes.solutionCardText}>
            A map-centric interface was prioritized for drivers, offering
            one-touch navigation to disposal sites and real-time load tracking
            without leaving the main viewport.
          </Typography>
          <Box className={classes.phoneMockupRow}>
            {["Roster View", "Map View", "Load Tracker"].map((label) => (
              <Box
                key={label}
                className={classes.phoneMockup}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ fontSize: 11, color: "#4D5470" }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Card 3 – Material 3 Migration */}
        <Box className={classes.solutionCard}>
          <Typography className={classes.solutionCardTitle}>
            Material 3 Migration
          </Typography>
          <Typography className={classes.solutionCardText}>
            Systematized the UI with a full M3 library to ensure scalability
            across different Android and iOS screen sizes.
          </Typography>
          <Box className={classes.m3SwatchRow}>
            {m3Colors.map((color, i) => (
              <Box
                key={i}
                className={classes.m3Swatch}
                style={{ background: color }}
              />
            ))}
          </Box>
        </Box>

        {/* Card 4 – Offline Experience */}
        <Box className={classes.solutionCard}>
          <Typography className={classes.solutionCardTitle}>
            Offline Experience
          </Typography>

          {/* Problem / Approach / Solution row */}
          <Box
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {/* Left col */}
            <Box
              style={{
                flex: 1,
                minWidth: 240,
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              <Box>
                <Typography className={classes.offlineLabel}>
                  Problem
                </Typography>
                <Typography className={classes.offlineText}>
                  The app relied on a static "No Internet Connection" screen,
                  completely blocking users and interrupting workflows in
                  low-connectivity environments.
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.offlineLabel}>
                  Approach
                </Typography>
                <Typography className={classes.offlineText}>
                  Worked with Mobile &amp; Engineering leads to define a
                  solution within technical and timeline constraints—shifting
                  offline from a failure state to a limited-access state.
                </Typography>
              </Box>
            </Box>

            {/* Right col – solution box */}
            <Box className={classes.offlineSolutionBox}>
              <Typography className={classes.offlineLabel}>Solution</Typography>
              {[
                "Persisted previously loaded data",
                "Maintained UI state for key screens (Live Roster Count, Roster Page)",
                "Enabled users to continue viewing critical information offline",
              ].map((item) => (
                <Box key={item} className={classes.offlineBulletRow}>
                  <Box className={classes.offlineBulletDot} />
                  <Typography className={classes.offlineBulletText}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Next Steps + Impact */}
          <Box
            style={{
              display: "flex",
              gap: 32,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            <Box style={{ flex: 1, minWidth: 220 }}>
              <Typography className={classes.offlineLabel}>
                Next Steps
              </Typography>
              {[
                "Local data storage for user actions",
                "Sync changes automatically when back online",
              ].map((item) => (
                <Box
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <Box className={classes.offlineSmallDot} />
                  <Typography className={classes.offlineSmallText}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box style={{ flex: 1, minWidth: 220 }}>
              <Typography className={classes.offlineImpactLabel}>
                Impact
              </Typography>
              <Typography className={classes.offlineImpactText}>
                Reduced disruptions, improved reliability, and ensured
                continuity even without internet.
              </Typography>
            </Box>
          </Box>

          {/* Offline screen mockups */}
          <Box className={classes.phoneMockupRow}>
            {["Offline Banner", "Cached Roster"].map((label) => (
              <Box
                key={label}
                className={classes.phoneMockup}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ fontSize: 11, color: "#4D5470" }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Card 5 – Tablet Responsive */}
        <Box className={classes.solutionCard}>
          <Typography className={classes.solutionCardTitle}>
            Tablet Responsive
          </Typography>
          <Typography className={classes.solutionCardText}>
            Extended the design system to tablet breakpoints, enabling
            supervisors to manage rosters on larger screens with an adaptive
            two-column layout.
          </Typography>
          <Box
            style={{
              width: "100%",
              height: 440,
              background: "#111318",
              borderRadius: 16,
              border: "1px solid #232630",
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                fontSize: 12,
                color: "#4D5470",
                letterSpacing: "0.06em",
              }}
            >
              Tablet Layout Mockup
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── USER TESTING ── */}
      <Box className={classes.userTestingSection}>
        <SectionLeft
          eyebrow="Validation"
          heading="User Testing"
          classes={classes}
        />
        <Typography className={classes.userTestingText}>
          Conducted with real employees under actual working conditions,
          including the use of protective gear. Observed how users interacted
          with the app, identified pain points and where they got stuck, and
          iterated the design based on these insights. Collaborated closely with
          managers and the QA team to refine workflows and ensure practical
          usability.
        </Typography>
      </Box>

      {/* ── IMPACT ── */}
      <Box className={classes.impactSection}>
        <Typography className={classes.impactEyebrow}>Results</Typography>
        <Box className={classes.impactCardsRow}>
          {impactStats.map((stat) => (
            <Box key={stat.label} className={classes.impactCard}>
              <Typography className={classes.impactNumber}>
                {stat.number}
              </Typography>
              <Typography className={classes.impactDesc}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── LEARNINGS & REFLECTION ── */}
      <Box className={classes.learningsSection}>
        <SectionLeft
          eyebrow="Takeaways"
          heading={"Learnings &\nReflection"}
          classes={classes}
        />
        <Box className={classes.learningsRight}>
          {learnings.map((l) => (
            <Box key={l.num} className={classes.learningItem}>
              <Typography className={classes.learningNumber}>
                {l.num}
              </Typography>
              <Typography className={classes.learningText}>{l.text}</Typography>
            </Box>
          ))}
          <Box className={classes.reflectionBox}>
            <Typography className={classes.reflectionText}>
              Reflecting on this journey, the success of the Roster App wasn't
              just in the code or the screens — it was in giving back hours of
              time to people who do the hard physical work of building our
              cities. Moving from a "control" mindset to an "empowerment"
              mindset changed the entire product trajectory.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── FOOTER ── */}
      <Box className={classes.footer}>
        <Box>
          <Typography className={classes.footerName}>Yakeen Kapali</Typography>
          <Typography className={classes.footerCopy}>
            © 2025 Product Designer.
          </Typography>
        </Box>
        <Typography className={classes.footerEmail}>
          yakeenkapali@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default CaseStudyDetail1;
