import { Container, Box } from "@mui/system";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

import CaseStudyDetail1 from "../../components/CaseStudy/static/CaseStudyDetail1";
import caseStudyStyles from "../../styles/caseStudyDetailStyles";
import { pages } from "../../constants/nav-item";
import { SeeMore } from "../../components/SeeAlso/SeeAlso";

const CaseStudy = () => {
  const { id } = useParams();
  const caseStudyId = Number(id);

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
        <SeeMore />
      </Box>
    </Container>
  );
};

export default CaseStudy;
