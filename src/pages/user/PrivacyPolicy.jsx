import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/globalStyle";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" paragraph>
            Team Nagne (nagne, 나그네, hereinafter referred to as the
            "Operator") has established the following privacy policy in
            accordance with the Personal Information Protection Act to protect
            users' personal information and rights and to handle users'
            complaints regarding personal information smoothly.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            1. Purpose of Collection and Use of Personal Information
          </Typography>
          <Typography variant="body1" paragraph>
            The "Operator" utilizes personal information for the following
            purposes. The processed personal information will not be used for
            purposes other than those specified below, and if the purpose of use
            changes, prior consent will be obtained.
          </Typography>
          <Typography
            variant="body1"
            component="ul"
            sx={{ listStyleType: "disc", pl: 2 }}
          >
            <li>
              Website Membership Registration and Management: Personal
              information is used for purposes such as confirming the intention
              to register as a member, identifying and verifying the user for
              membership-based services, maintaining and managing membership,
              implementing the limited identity verification system, preventing
              fraudulent use of services, providing various notifications and
              announcements, and preserving records for dispute resolution.
            </li>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            2. Items of Personal Information Collected
          </Typography>
          <Typography variant="body1" paragraph>
            The "Operator" collects the minimum personal information necessary
            through Google and Facebook during the membership registration and
            service usage process.
          </Typography>
          <Typography variant="body1" paragraph>
            The "Operator" does not collect sensitive personal information that
            may infringe on the user's basic human rights (such as race,
            ethnicity, ideology, beliefs, place of origin, political
            orientation, criminal records, health status, and sexual life).
            Additionally, under no circumstances will the information provided
            be used for purposes other than those disclosed to users in advance,
            nor will it be disclosed to external parties. However, information
            such as IP address, cookies, and device information may be
            automatically generated and collected during the use of services via
            PC web or mobile web/app.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            3. Retention and Destruction of Personal Information
          </Typography>
          <Typography
            variant="body1"
            component="ul"
            sx={{ listStyleType: "disc", pl: 2 }}
          >
            <li>
              The "Operator" will destroy the personal information without delay
              when it becomes unnecessary, such as when the retention period has
              elapsed or the purpose of processing has been achieved. However,
              if separate consent has been obtained from the user regarding the
              retention period of personal information, or if there is a
              statutory obligation to retain information for a certain period,
              the personal information will be safely stored for the specified
              period.
            </li>
            <li>
              Cases where separate consent has been obtained from the user
              regarding the retention period of personal information include the
              following: Records of fraudulent membership registrations and
              disciplinary actions are stored for six months from the time of
              collection to prevent fraudulent registrations and use, after
              which they are destroyed.
            </li>
            <li>
              Cases where the law mandates the retention of information for a
              certain period include the following: The "Operator" retains
              personal information in accordance with legal regulations during
              the specified period and will not use this information for other
              purposes.
              <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                <li>
                  Protection of Communications Secrets Act: Login records are
                  retained for 3 months.
                </li>
                <li>
                  Act on Promotion of Information and Communications Network
                  Utilization and Information Protection, etc.: Records of
                  identity verification are retained for 6 months.
                </li>
              </ul>
            </li>
            <li>
              Personal information that has fulfilled its collection and usage
              purposes, such as in cases of membership withdrawal, service
              termination, or the arrival of the agreed-upon retention period,
              will be destroyed in a manner that makes it unrecoverable.
            </li>
            <li>
              Even for information that is required by law to be retained, it
              will be destroyed in a manner that makes it unrecoverable without
              delay after the retention period has expired.
            </li>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
