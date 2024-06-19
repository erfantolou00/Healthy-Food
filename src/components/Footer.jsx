import {
  Box,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";

function Footer() {
  const theme = useTheme();
  const color = theme.palette;
  return (
    // The Box component here is used as the outermost container for the footer, with a background color and top margin.
    <Box bgcolor={theme.palette.background.paper} mt={10} id="target-section-contacts">
      {/* Grid container to hold and align the footer elements */}
      <Grid container wrap="nowrap" p={8}>
        <Grid
          container
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
        >
          <SvgIcon>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 0C4.97746 0 0.459015 4.5 0.459015 10C0.459015 15.5 4.97746 20 10.5 20C16.0225 20 20.541 15.5 20.541 10C20.541 4.5 16.0225 0 10.5 0ZM14.7172 14.2L9.4959 11V5H11.0021V10.2L15.5205 12.9L14.7172 14.2Z"
                fill="#34C759"
              />
              <g mask="url(#mask0_2_190)">
                <rect x="-2.55328" y="-3" width="26.1066" height="26" />
              </g>
            </svg>
          </SvgIcon>

          <Typography fontSize={theme.typography.fontSize} mt={3}>
            Today 10:00 am - 7:00 pm{" "}
          </Typography>
          <Typography
            fontSize={theme.typography.caption}
            color={theme.palette.text.disabled}
          >
            Working hours
          </Typography>
        </Grid>
        <Grid
          container
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
        >
          <SvgIcon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0L0 7.53V8.51L6.84 11.16L9.48 18H10.46L18 0Z"
                fill="#34C759"
              />

              <g mask="url(#mask0_2_183)">
                <rect x="-4" y="-4" width="26" height="26" />
              </g>
            </svg>
          </SvgIcon>

          <Typography fontSize={theme.typography.fontSize} mt={3}>
            Velyka Vasylkivska 100{" "}
          </Typography>
          <Typography
            fontSize={theme.typography.caption}
            color={theme.palette.text.disabled}
          >
            Get Directions
          </Typography>
        </Grid>
        <Grid
          container
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
        >
          <SvgIcon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                fill="#34C759"
              />

              <g mask="url(#mask0_2_176)">
                <rect x="-4" y="-4" width="26" height="26" />
              </g>
            </svg>
          </SvgIcon>

          <Typography fontSize={theme.typography.fontSize} mt={3}>
            +38 (063)833 24 15{" "}
          </Typography>
          <Typography
            fontSize={theme.typography.caption}
            color={theme.palette.text.disabled}
          >
            Call Online
          </Typography>
        </Grid>
      </Grid>

      <Divider />

      <Grid
        display={"flex"}
        container
        direction={"column"}
        alignItems={"center"}
        mt={6}
        pb={6}
      >
        <Stack direction={"row"} alignItems={"flex-end"}>
          <SvgIcon
            sx={{
              mb: "3px",
            }}
          >
            <svg
              width="140"
              height="134"
              viewBox="0 0 140 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_1115)">
                <path
                  d="M95.4633 45.6179H44.1862C19.8555 45.6179 0.130249 65.3763 0.130249 89.7583C0.130249 114.14 19.8555 133.907 44.1862 133.907H95.4633C119.794 133.907 139.519 114.14 139.519 89.7583C139.519 65.3763 119.794 45.6179 95.4633 45.6179ZM94.5028 128.845C72.968 128.845 55.5068 111.347 55.5068 89.7669C55.5068 68.1866 72.968 50.6886 94.5028 50.6886C116.038 50.6886 133.499 68.1866 133.499 89.7669C133.499 111.347 116.038 128.845 94.5028 128.845Z"
                  fill="#32D74B"
                />
                <path
                  d="M89.3657 26.2114C89.3657 31.7719 90.8065 36.9887 93.3364 41.5093C81.0382 39.3865 71.6815 28.6436 71.6815 15.7091C71.6815 14.0848 71.8273 12.4949 72.1189 10.9479C74.5202 10.2174 77.076 9.82202 79.7174 9.82202C84.2628 9.82202 88.5423 10.9908 92.2644 13.0363C90.4034 17.0412 89.3657 21.5017 89.3657 26.2114Z"
                  fill="#32D74B"
                />
                <path
                  d="M123.945 15.7091C123.945 27.5263 116.14 37.5129 105.412 40.7702C103.568 41.3288 101.647 41.6983 99.6484 41.8273H99.6399C96.4066 37.4699 94.4941 32.0641 94.4941 26.2114C94.4941 22.5846 95.2317 19.1297 96.561 15.9842C100.309 7.13201 108.774 0.780807 118.799 0.0932617C122.032 4.45058 123.945 9.8564 123.945 15.7091Z"
                  fill="#32D74B"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_1115">
                  <rect
                    width="139.389"
                    height="133.813"
                    fill="white"
                    transform="translate(0.130249 0.0932617)"
                  />
                </clipPath>
              </defs>
            </svg>
          </SvgIcon>
          <Typography
            color={color.text.secondary}
            ml={1}
            fontWeight={700}
            letterSpacing={2.5}
            fontSize={theme.typography.fontSize}
          >
            HEALTHY SWITCHER
          </Typography>
        </Stack>
        <Typography
          fontSize={theme.typography.caption}
          color={color.text.disabled}
        >
          © Designed by Yellow Snow. All Rights Reserved.{" "}
        </Typography>
      </Grid>
    </Box>
  );
}

export default Footer;
