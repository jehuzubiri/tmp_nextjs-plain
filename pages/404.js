
import { ErrorPage } from '@src/components/GeneralCustom';
const PageComponent = () => <ErrorPage />;
export default PageComponent;

// import { Box, Button, Typography, useTheme } from "@mui/material";
// import Image from "next/image";
// import AppLogo from "@public/favicon.png";
// import { useRouter } from "next/router";

// export default function Custom404() {
//   const theme = useTheme();
//   const router = useRouter();
//   const { palette } = theme;

//   return (
//     <Box
//       width="100vw"
//       height="95vh"
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Box
//         height={420}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//       >
//         <Box position="relative" width={90} height={90} mb={6}>
//           <Image
//             alt={AppLogo}
//             src={AppLogo}
//             quality={50}
//             fill
//             sizes="(min-width: 360px) 100vw"
//             style={{ objectFit: "cover", borderRadius: "5px" }}
//           />
//         </Box>
//         <Typography
//           variant="h1"
//           sx={{ fontSize: 24, fontWeight: 700, color: palette.primary.light }}
//         >
//           Page not found.
//         </Typography>
//         <Button
//           variant="contained"
//           color="secondary"
//           sx={{ mt: 3 }}
//           onClick={() => router.push("/")}
//         >
//           Back to Home
//         </Button>
//       </Box>
//     </Box>
//   );
// }