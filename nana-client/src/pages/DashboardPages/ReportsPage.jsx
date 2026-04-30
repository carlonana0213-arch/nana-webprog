import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge } from "@mui/x-charts/Gauge";

const ReportsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h4">Reports</Typography>
          <Typography variant="body2" color="text.secondary">
            Report analytics overview showing generated reports and performance.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained">Generate</Button>
          <Button variant="outlined">Export</Button>
          <Button variant="outlined">Filter</Button>
        </Box>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Report Output
          </Typography>

          <BarChart
            series={[
              { data: [35, 44, 24, 34], label: "Series 1" },
              { data: [51, 6, 49, 30], label: "Series 2" },
            ]}
            height={290}
            xAxis={[
              {
                data: ["Q1", "Q2", "Q3", "Q4"],
                scaleType: "band",
                label: "Quarters",
              },
            ]}
          />
        </CardContent>
      </Card>

      {/* BOTTOM ROW (SIDE BY SIDE) */}
      <Grid container spacing={3}>
        {/* PIE CHART */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Report Category Share
              </Typography>

              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                height={250}
                width={780}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* GAUGE */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Completion Rate
              </Typography>

              <Gauge width={780} height={250} value={78} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;
