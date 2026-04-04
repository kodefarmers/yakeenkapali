import { Container, Box } from "@mui/system";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

import CaseStudyDetail1 from "../../components/CaseStudy/static/CaseStudyDetail1";
import caseStudyStyles from "../../styles/caseStudyDetailStyles";

const CaseStudy = () => {
  const { id } = useParams();
  const caseStudyId = Number(id);

  const pages = [
    { name: "About", link: "/#about" },
    { name: "Works", link: "/works" },
  ];

  // Add all your case study components here
  const caseStudies = [CaseStudyDetail1];

  const SelectedCaseStudy = caseStudies[caseStudyId];

  return (
    <Container>
      <Navbar pages={pages} />

      <Box sx={caseStudyStyles.caseStudyContainer}>
        {SelectedCaseStudy ? (
          <SelectedCaseStudy />
        ) : (
          <div>Project not found. Please check the URL and try again.</div>
        )}
      </Box>
    </Container>
  );
};

export default CaseStudy;