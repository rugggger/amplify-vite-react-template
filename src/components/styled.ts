import { Box, styled } from '@mui/material';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

const LinearProgressWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: theme.spacing(4),
  '& .MuiLinearProgress-root': {
    background: theme.palette.grey[400],
    borderRadius: theme.shape.borderRadius,
    height: theme.spacing(2.75),
    minWidth: theme.spacing(25),
    '& .MuiLinearProgress-bar': {
      background: theme.palette.primary.main,
    },
  },
  '& .MuiTypography-root': {
    fontSize: theme.typography.pxToRem(14),
  },
}));

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox, LinearProgressWrapper };
