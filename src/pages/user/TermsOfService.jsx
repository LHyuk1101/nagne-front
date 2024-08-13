import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/globalStyle";

const TermsOfService = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{ fontWeight: 700 }}
          >
            Terms of Service
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Article 1 (Purpose)
          </Typography>
          <Typography variant="body1" paragraph>
            The purpose of these terms and conditions is to define the rights,
            obligations, and responsibilities of the operator and the user in
            connection with the use of the service ('nagne.site', hereinafter
            referred to as the "Service") operated by Team 4 of the 3rd Cloud
            Track 3rd Project of the ELICE Cloud Track 3rd (hereinafter referred
            to as the "Operator").
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Article 2 (Definitions)
          </Typography>
          <Typography variant="body1" paragraph>
            "Service" refers to everything related to nagne provided by the
            Operator.
          </Typography>
          <Typography variant="body1" paragraph>
            "User" refers to both members and non-members who access the
            Operator's "Service" and use the "Service" provided by the
            "Operator" in accordance with these terms and conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            "Member" refers to a customer who accesses the Operator's "Service,"
            enters into a usage contract with the "Operator," and uses the
            "Service" provided by the "Operator" in accordance with these terms
            and conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            "Non-member" refers to a customer who, without registering as a
            member, accesses the Operator's "Service," enters into a usage
            contract with the "Operator," and uses the "Service" provided by the
            "Operator" in accordance with these terms and conditions.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Article 3 (Membership Registration)
          </Typography>
          <Typography variant="body1" paragraph>
            1. "User" applies for membership by filling out the membership
            information according to the form set by the "Operator" and
            expressing their consent to these terms and conditions.
          </Typography>
          <Typography variant="body1" paragraph>
            2. The "Operator" will register the "User" as a "Member" unless
            there are special circumstances, as specified in Paragraph 1.
          </Typography>
          <Typography variant="body1" paragraph>
            3. The timing of the establishment of the membership contract is
            when the "Operator's" acceptance reaches the "Member."
          </Typography>
          <Typography variant="body1" paragraph>
            4. If there are any changes to the information registered at the
            time of membership registration, the "Member" must notify the
            "Operator" of such changes within 7 days by methods such as
            modifying their membership information, as stipulated in these terms
            and conditions.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Article 4 (Membership Withdrawal)
          </Typography>
          <Typography variant="body1" paragraph>
            1. "Member" may request withdrawal from membership at any time, and
            the "Operator" will process the withdrawal within 3 days of
            receiving the request.
          </Typography>
          <Typography variant="body1" paragraph>
            2. If the "Member" falls under any of the following reasons, the
            "Operator" may restrict or suspend membership without notice.
          </Typography>
          <Typography variant="body1" paragraph>
            3. If the "Member" repeats the same actions more than twice after
            membership has been restricted or suspended, the "Operator" may
            revoke the "User's" membership.
          </Typography>
          <Typography variant="body1" paragraph>
            4. If the "Operator" revokes membership, it will delete the
            registration. In this case, the "Operator" will notify the "Member,"
            and the "Member" will have the right to appeal within 30 days.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Article 5 (Privacy Protection)
          </Typography>
          <Typography variant="body1" paragraph>
            1. The "Operator" will collect the minimum personal information
            necessary to provide the service when collecting "User's" personal
            information.
          </Typography>
          <Typography variant="body1" paragraph>
            2. The "Operator" will not use the collected personal information
            for purposes other than the original intent. If a new purpose arises
            or if the information is provided to a third party, the "Operator"
            will notify the "User" of the purpose and obtain consent at the
            stage of use or provision, except as otherwise required by law.
          </Typography>
          <Typography variant="body1" paragraph>
            3. "User" has the right to view and correct their personal
            information held by the "Operator" at any time, and the "Operator"
            is obligated to take necessary actions without delay. If the "User"
            requests correction of errors, the "Operator" will not use the
            personal information until the error is corrected.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default TermsOfService;
