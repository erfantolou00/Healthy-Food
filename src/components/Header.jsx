import { Box, Button, Grid, Stack, SvgIcon, Typography, useTheme } from "@mui/material";

const itemHeader = ["Menu", "Recipes", "Chefs", "contacts"];

export default function Header() {
  const theme = useTheme();

  const color = theme.palette;

  return (
    
      <Box  mx={"128px"}>
        <Grid display={"flex"} p={"24px"} justifyContent={"space-between"} alignItems={"center"}>
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
          <Stack direction={"row"}>
            {itemHeader.map((item) => (
              <Button key={item}  href={`#target-section-${item}`}  sx={{
                color: item === 'Menu' ? color.text.secondary : color.text.primary,
                fontWeight:700,
                fontSize: theme.typography.caption,
                letterSpacing: 0.1,
                mr:2
                
                
              }} >{item}</Button>
            ))}
          </Stack>
        </Grid>
      </Box>
    
  );
}
