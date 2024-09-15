import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const vegetablesData = [
  {
    name: "Brinjal (Eggplant)",
    tamil: "கத்திரிக்காய் (Kathirikkai)",
    co2Sensitive: "High",
    ethyleneSensitive: "Low",
    co2Impact: "Wilting softening off-flavors.",
    ethyleneImpact: "Not significantly affected by ethylene.",
    ethyleneLevel: "<1 ppm"
  },
  // Add all the vegetable data from the document here
];

const VegetablesTable = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Vegetables Data
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>English Name</TableCell>
              <TableCell>Tamil Name</TableCell>
              <TableCell>Sensitive to CO2</TableCell>
              <TableCell>Sensitive to Ethylene</TableCell>
              <TableCell>Impact at High CO2</TableCell>
              <TableCell>Impact at High Ethylene</TableCell>
              <TableCell>Ethylene Sensitivity Level (ppm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vegetablesData.map((vegetable, index) => (
              <TableRow key={index}>
                <TableCell>{vegetable.name}</TableCell>
                <TableCell>{vegetable.tamil}</TableCell>
                <TableCell>{vegetable.co2Sensitive}</TableCell>
                <TableCell>{vegetable.ethyleneSensitive}</TableCell>
                <TableCell>{vegetable.co2Impact}</TableCell>
                <TableCell>{vegetable.ethyleneImpact}</TableCell>
                <TableCell>{vegetable.ethyleneLevel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VegetablesTable;
