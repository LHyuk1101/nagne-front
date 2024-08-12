import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

const RecommendationSummary = () => {
  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" gutterBottom>
        Seoul hoooot Place
      </Typography>
      <Typography variant="body1" paragraph>
        이 여행 계획은 hooot 한 장소를 모았어요 서울의 주요 명소들과 제일 많은
        방문수를 가지고 있는 말그대로 hot place!
      </Typography>
      <Typography variant="body1" paragraph>
        llm 한테 예시장소 달라고 하면 무조건 주는 장소들 안갈수가 없겠쥬?
      </Typography>
      <Box mt={2}></Box>
    </StyledPaper>
  );
};

export default RecommendationSummary;
