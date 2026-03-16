import { AppBar, Toolbar, Typography, Button, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: "rgba(11, 15, 25, 0.95)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
            }}
        >
            <Toolbar sx={{
                maxWidth: "lg",
                width: "100%",
                mx: "auto",
                py: 1
            }}>
                <Box sx={{ flexGrow: 3 }}>
                    <Typography
                        variant="h5"
                        component={Link}
                        to="/"
                        sx={{
                            fontWeight: "bold",
                            background: "linear-gradient(90deg, #4ade80, #22d3ee)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textDecoration: "none",
                            fontSize: { xs: "1.3rem", md: "1.5rem" },
                            letterSpacing: "0.5px",
                            "&:hover": {
                                background: "linear-gradient(90deg, #22d3ee, #4ade80)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                            }
                        }}
                    >
                        {/*CareWash*/}
                    </Typography>
                </Box>

                <Stack direction="row" spacing={1}>
                    <Button
                        component={Link}
                        to="/"
                        sx={{
                            color: "#9CA3AF",
                            fontSize: "1rem",
                            fontWeight: 500,
                            px: 3,
                            py: 1,
                            borderRadius: 2,
                            textTransform: "none",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                color: "#22d3ee",
                                background: "rgba(34, 211, 238, 0.1)"
                            }
                        }}
                    >
                        Home
                    </Button>

                    <Button
                        component={Link}
                        to="/project"
                        sx={{
                            color: "#9CA3AF",
                            fontSize: "1rem",
                            fontWeight: 500,
                            px: 3,
                            py: 1,
                            borderRadius: 2,
                            textTransform: "none",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                color: "#22d3ee",
                                background: "rgba(34, 211, 238, 0.1)"
                            }
                        }}
                    >
                        Project
                    </Button>

                    <Button
                        component={Link}
                        to="/about"
                        sx={{
                            color: "#9CA3AF",
                            fontSize: "1rem",
                            fontWeight: 500,
                            px: 3,
                            py: 1,
                            borderRadius: 2,
                            textTransform: "none",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                color: "#22d3ee",
                                background: "rgba(34, 211, 238, 0.1)"
                            }
                        }}
                    >
                        About
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}