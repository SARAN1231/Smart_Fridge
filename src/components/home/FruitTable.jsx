import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const fruitsData = [
    {
      name: "Bananas",
      tamil: "வாழைப்பழம் (Vazhaipazham)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Browning slight flavor reduction.",
      ethyleneImpact: "Rapid ripening mushy texture.",
      ethyleneLevel: "1 - 10 ppm"
    },
    {
      name: "Mangoes",
      tamil: "மாம்பழம் (Mambazham)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Soft texture faster ripening.",
      ethyleneImpact: "Wrinkling soft flesh quick spoilage.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Papayas",
      tamil: "பப்பாளி (Papaya)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Accelerated ripening off-flavors.",
      ethyleneImpact: "Over-ripening pulp becomes mushy.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Apples",
      tamil: "ஆப்பிள் (Apple)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "CO2 helps preserve freshness.",
      ethyleneImpact: "Quick softening spoilage of nearby fruits.",
      ethyleneLevel: "0.1 - 1 ppm"
    },
    {
      name: "Guavas",
      tamil: "கொய்யா (Koyya)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Delayed ripening minor spoilage.",
      ethyleneImpact: "Ripens fast strong smell soft texture.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Pomegranates",
      tamil: "மாதுளை (Mathulai)",
      co2Sensitive: "Low",
      ethyleneSensitive: "Low",
      co2Impact: "Very little effect; CO2 prolongs storage.",
      ethyleneImpact: "Minimal ethylene effect.",
      ethyleneLevel: "<1 ppm"
    },
    {
      name: "Grapes",
      tamil: "திராட்சை (Thiratchai)",
      co2Sensitive: "High",
      ethyleneSensitive: "Low",
      co2Impact: "Dehydration spoilage loss of firmness.",
      ethyleneImpact: "Minimal effect from ethylene.",
      ethyleneLevel: "<1 ppm"
    },
    {
      name: "Lemons",
      tamil: "எலுமிச்சை (Elumichai)",
      co2Sensitive: "Low",
      ethyleneSensitive: "Moderate",
      co2Impact: "Slows ripening at low CO2 levels.",
      ethyleneImpact: "Slight color change minor softening.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Oranges",
      tamil: "ஒற்றை நாரங்காய் (Otrai Narangai)",
      co2Sensitive: "Low",
      ethyleneSensitive: "Moderate",
      co2Impact: "Extended storage time at moderate CO2.",
      ethyleneImpact: "Mild softening slight loss of freshness.",
      ethyleneLevel: "0.1 - 1 ppm"
    },
    {
      name: "Pineapples",
      tamil: "அன்னாசி (Ananasi)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Mild softening and yellowing of skin.",
      ethyleneImpact: "Over-ripens quickly becomes too sweet.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Custard Apple",
      tamil: "சிதாப்பழம் (Chithappazham)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Rapid ripening if CO2 levels are too high.",
      ethyleneImpact: "Ripens quickly pulp becomes mushy.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Jackfruit",
      tamil: "பழநிறை மிட்டாய் (Pazhanirai Mittai)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Mild spoilage accelerated ripening.",
      ethyleneImpact: "Over-softening strong aroma early spoilage.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Avocados",
      tamil: "ஆவகோடா (Avocado)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Softens quickly under high CO2.",
      ethyleneImpact: "Quick ripening mushy texture.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Plums",
      tamil: "பிளம் (Plum)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Delays ripening maintains firmness.",
      ethyleneImpact: "Ripens rapidly becomes too soft.",
      ethyleneLevel: "1 - 10 ppm"
    },
    {
      name: "Peaches",
      tamil: "பீச்சு (Peach)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Mild softening at high CO2 levels.",
      ethyleneImpact: "Ripens fast becomes mushy.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Cherries",
      tamil: "செர்ரி (Cherry)",
      co2Sensitive: "High",
      ethyleneSensitive: "Low",
      co2Impact: "Dehydration softening loss of flavor.",
      ethyleneImpact: "No major impact from ethylene.",
      ethyleneLevel: "<1 ppm"
    },
    {
      name: "Lychees",
      tamil: "லிச்சி (Lychee)",
      co2Sensitive: "High",
      ethyleneSensitive: "Low",
      co2Impact: "Color degradation softening loss of flavor.",
      ethyleneImpact: "No significant ethylene effect.",
      ethyleneLevel: "<1 ppm"
    },
    {
      name: "Figs",
      tamil: "அவுறா (Avura)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Softens under high CO2 minor spoilage.",
      ethyleneImpact: "Ripens too quickly develops mushy texture.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Dates",
      tamil: "பருப்பு (Paruppu)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Delayed ripening at moderate CO2 levels.",
      ethyleneImpact: "Softens quickly under ethylene exposure.",
      ethyleneLevel: "1 - 10 ppm"
    },
    {
      name: "Strawberries",
      tamil: "ஸ்ட்ராபெர்ரி (Strawberry)",
      co2Sensitive: "High",
      ethyleneSensitive: "Low",
      co2Impact: "Softens spoils quickly mold growth.",
      ethyleneImpact: "No major impact from ethylene.",
      ethyleneLevel: "<1 ppm"
    },
    {
      name: "Watermelon",
      tamil: "தர்பூசணி (Tharpoosani)",
      co2Sensitive: "Low",
      ethyleneSensitive: "Moderate",
      co2Impact: "Minimal CO2 effect stays fresh longer.",
      ethyleneImpact: "Slight softening quick ripening.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Pears",
      tamil: "நாகப்பழம் (Nagapazham)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Helps delay ripening and softening.",
      ethyleneImpact: "Rapid ripening softening color change.",
      ethyleneLevel: "1 - 5 ppm"
    },
    {
      name: "Coconuts",
      tamil: "தேங்காய் (Thengai)",
      co2Sensitive: "Low",
      ethyleneSensitive: "Low",
      co2Impact: "No major effects from CO2.",
      ethyleneImpact: "No significant ethylene impact.",
      ethyleneLevel: "<1 ppm"
    },
    {
      name: "Chikoo (Sapota)",
      tamil: "சபோட்டா (Sapota)",
      co2Sensitive: "Low",
      ethyleneSensitive: "High",
      co2Impact: "Softens at high CO2 levels.",
      ethyleneImpact: "Quick ripening becomes very soft.",
      ethyleneLevel: "1 - 10 ppm"
    }
  ];

const FruitsTable = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Fruits Data
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
            {fruitsData.map((fruit, index) => (
              <TableRow key={index}>
                <TableCell>{fruit.name}</TableCell>
                <TableCell>{fruit.tamil}</TableCell>
                <TableCell>{fruit.co2Sensitive}</TableCell>
                <TableCell>{fruit.ethyleneSensitive}</TableCell>
                <TableCell>{fruit.co2Impact}</TableCell>
                <TableCell>{fruit.ethyleneImpact}</TableCell>
                <TableCell>{fruit.ethyleneLevel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FruitsTable;
