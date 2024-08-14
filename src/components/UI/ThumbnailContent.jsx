import { useState } from "react";
import { Box, styled, Popper, Paper, Typography } from "@mui/material";

const ThumbnailContent = styled(Box)(({ theme }) => ({
  maxWidth: 60,
  fontSize: 12,
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginTop: theme.spacing(0.5),
  cursor: "pointer",
}));

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: theme.zIndex.tooltip,
  "& .MuiPaper-root": {
    maxWidth: 200,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
  },
}));

const ThumbnailContentWithTooltip = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <ThumbnailContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title.length > 20 ? `${title.substring(0, 20)}...` : title}
      </ThumbnailContent>
      <StyledPopper
        open={open}
        anchorEl={anchorEl}
        placement="top-start"
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [60, -20],
            },
          },
        ]}
      >
        <Paper>
          <Typography variant="body2">{title}</Typography>
        </Paper>
      </StyledPopper>
    </>
  );
};

export default ThumbnailContentWithTooltip;
