import {
  Button,
  Card,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const loading = [];
for (let i = 0; i < 3; i++) {
  loading.push(
    <Stack
      component={Paper}
      sx={{
        width: "100%",
        minHeight: { xs: 600, sm: 350 },
        direction: { xs: "column", sm: "row" },
      }}
      elevation={5}
      justifyContent={"space-between"}
      gap={"20px"}>
      {i == 1 ? (
        <>
          {/* text */}
          <Stack
            sx={{
              width: { xs: "100%", sm: "55%" },
            }}
            p='20px'
            height={"100%"}
            justifyContent={"center"}>
            <Stack direction='row' justifyContent={"center"}>
              <Skeleton width={"110px"} height={"50px"} animation={"wave"} />
            </Stack>
            <Skeleton width={"100%"} height={"50px"} animation={"wave"} />
            <Skeleton width={"100%"} height={"50px"} animation={"wave"} />
            <Skeleton width={"100%"} height={"50px"} animation={"wave"} />

            <Stack mt={"50px"}>
              <Skeleton
                width={"80px"}
                height={"40px"}
                variant={"rounded"}
                animation={"wave"}
              />
            </Stack>
          </Stack>
          {/* img */}
          <Stack
            sx={{
              width: { xs: "100%", sm: "40%" },
              height: { xs: "500px", sm: "100%" },
            }}>
            <Skeleton
              width={"100%"}
              variant={"rectangular"}
              height={"100%"}
              animation={"wave"}
            />
          </Stack>
        </>
      ) : (
        <>
          {/* img */}
          <Stack sx={{ width: { xs: "100%", sm: "40%" },
         height: { xs: "500px", sm: "100%" }, }}>
            <Skeleton
              width={"100%"}
              variant={"rectangular"}
              height={"100%"}
              animation={"wave"}
            />
          </Stack>
          {/* text */}
          <Stack
            sx={{
              width: { xs: "100%", sm: "55%" },
            }}
            p='20px'
            justifyContent={"center"}
            height={"100%"}>
            <Stack direction='row' justifyContent={"center"}>
              <Skeleton width={"110px"} height={"50px"} animation={"wave"} />
            </Stack>
            <Skeleton width={"100%"} height={"50px"} animation={"wave"} />
            <Skeleton width={"100%"} height={"50px"} animation={"wave"} />
            <Skeleton width={"100%"} height={"50px"} animation={"wave"} />
            <Stack mt={"50px"} alignItems={"end"}>
              <Skeleton
                width={"80px"}
                height={"40px"}
                variant={"rounded"}
                animation={"wave"}
              />
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
}
export default function CardDetailsSkeleton() {
  return (
    <Stack
      gap='50px'
      my='30px'
      p='50px'
      justifyContent={"center"}
      alignItems={"center"}>
      {loading}
    </Stack>
  );
}
