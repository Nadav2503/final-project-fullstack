import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PageHeader from "../general/PageHeader";
import ROUTES from "../routers/routerModel";
import { useNavigate } from "react-router-dom";

const ZONES = [
    { name: "Africa", x: 100, y: 200, width: 150, height: 100, fill: "#FFCC00" },
    { name: "Asia", x: 300, y: 150, width: 200, height: 100, fill: "#FF7043" },
    { name: "Europe", x: 550, y: 100, width: 150, height: 75, fill: "#4DB6AC" },
    { name: "North America", x: 100, y: 50, width: 150, height: 75, fill: "#29B6F6" },
    { name: "South America", x: 100, y: 350, width: 150, height: 100, fill: "#81C784" },
    { name: "Australia", x: 520, y: 400, width: 150, height: 100, fill: "#FFD54F" },
    { name: "Antarctica", x: 300, y: 500, width: 200, height: 75, fill: "#B3E5FC" },
];

export default function CustomMapPage() {
    const navigate = useNavigate();

    const handleZoneClick = (location) => {
        navigate(`${ROUTES.EXHIBITS}?location=${location}`);
    };

    return (
        <Container>
            <PageHeader title="Interactive Zoo Map" />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 4,
                    mb: 4,
                    position: "relative",
                    height: "600px",
                    backgroundImage: `url('/images/map.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                }}
            >
                <svg
                    viewBox="0 0 800 600"
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "800px",
                    }}
                >
                    {ZONES.map((zone) => (
                        <React.Fragment key={zone.name}>
                            <rect
                                x={zone.x}
                                y={zone.y}
                                width={zone.width}
                                height={zone.height}
                                fill={zone.fill}
                                onClick={() => handleZoneClick(zone.name)}
                                style={{
                                    cursor: "pointer",
                                }}
                            />
                            <text
                                x={zone.x + zone.width / 2}
                                y={zone.y + zone.height / 2}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                                fontSize="16px"
                                fontWeight="bold"
                                style={{ pointerEvents: "none" }}
                            >
                                {zone.name}
                            </text>
                        </React.Fragment>
                    ))}
                </svg>
            </Box>
            <Typography align="center" variant="body2" color="textSecondary">
                Click on a zone to explore exhibits from that region.
            </Typography>
        </Container>
    );
}
