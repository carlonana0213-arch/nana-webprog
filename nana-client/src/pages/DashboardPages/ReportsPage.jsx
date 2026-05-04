import { useRef } from "react";
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
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open("", "_blank", "width=1200,height=900");
    if (!printWindow) return;

    // ✅ CRITICAL: copy styles
    const styles = Array.from(
      document.querySelectorAll("style, link[rel='stylesheet']"),
    )
      .map((el) => el.outerHTML)
      .join("");

    const exportedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date());

    printWindow.document.write(`
    <html>
      <head>
        <title>Reports</title>
        ${styles}
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: #fff;
            color: #1f2937;
          }

          .report-container {
            max-width: 1000px;
            margin: auto;
          }

          .MuiCard-root {
            box-shadow: none !important;
            border: 1px solid #e5e7eb;
            margin-bottom: 20px;
          }

          svg {
            max-width: 100% !important;
            height: auto !important;
          }
        </style>
      </head>

      <body>
        <div class="report-container">
          <h1>Reports Summary</h1>
          <p>Generated on ${exportedAt}</p>

          ${printContent.outerHTML}
        </div>
      </body>
    </html>
  `);

    printWindow.document.close();

    // wait for charts to render
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 500);
  };
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
          <Button variant="outlined" onClick={handlePrint}>
            Export
          </Button>
          <Button variant="outlined">Filter</Button>
        </Box>
      </Box>

      <Box ref={printRef}>
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
                <Box display="flex" justifyContent="center">
                  <Gauge width={780} height={250} value={78} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReportsPage;
