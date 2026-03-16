import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Stack,
    Paper
} from "@mui/material";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import {Link} from "react-router-dom";
import Footer from "../components/Footer.tsx";

const processImages = [
    { title: "Raw Point Cloud", img: "/images/raw.png" },
    { title: "Filtering Noise", img: "/images/filter.png" },
    { title: "Segmentation", img: "/images/segmentation.png" },
    { title: "Final Mesh", img: "/images/mesh.png" }
];

export default function Home() {
    return (
        <Box sx={{ background: "#0b0f19", color: "#ffffff" }}>

            <Box  sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                backgroundImage: `linear-gradient(rgba(11,15,25,0.7), rgba(11,15,25,0.7)), url("/images/cars.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "#ffffff"
            }}>
                <Container maxWidth={"xl"}  sx={{ px: { xs: 3, md: 8 } }}>
                    <Grid container spacing={8} alignItems="center">

                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                gutterBottom
                                sx={{
                                    color: "#F3F4F6",
                                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                                    lineHeight: 1.2
                                }}
                            >
                                CareWash
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    color: "#f2f6f0",
                                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                                    lineHeight: 1.5
                                }}
                            >
                                3D car reconstruction using point cloud processing
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#efeff3",
                                    lineHeight: 1.8,
                                    fontSize: "1.05rem",
                                    mb: 5
                                }}
                            >
                                Our system processes scans to remove noise,
                                identify vehicle parts, and generate high-quality
                                3D meshes for automated car wash inspection.
                            </Typography>

                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                sx={{ mt: 6, justifyContent: "center" }}
                            >
                                <Button
                                    variant="contained"
                                    startIcon={<PlayCircleOutlineIcon />}
                                    size="large"
                                    sx={{
                                        py: 1.5,
                                        px: 4,
                                        fontSize: "1rem",
                                        borderRadius: 2,
                                        background: "linear-gradient(90deg, #4ade80, #22d3ee)",
                                        boxShadow: "0 4px 14px rgba(34,211,238,0.4)",
                                        "&:hover": {
                                            background: "linear-gradient(90deg, #22d3ee, #4ade80)",
                                            boxShadow: "0 6px 20px rgba(34,211,238,0.6)"
                                        }
                                    }}
                                >
                                    Watch Demo
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component={Link}
                                    to="/project"
                                    sx={{
                                        py: 1.5,
                                        px: 4,
                                        fontSize: "1rem",
                                        borderRadius: 2,
                                        borderWidth: 2,
                                        borderColor: "#22d3ee",
                                        color: "#22d3ee",
                                        "&:hover": {
                                            background: "rgba(34,211,238,0.1)",
                                            borderWidth: 2
                                        }
                                    }}
                                >
                                    Project Details
                                </Button>
                            </Stack>
                        </Grid>

                        {/* Video */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 1.5,
                                    background: "linear-gradient(145deg, #1F2937, #111827)",
                                    borderRadius: 4,
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        paddingTop: "56.25%",
                                        background: "#000",
                                        borderRadius: 3,
                                        overflow: "hidden"
                                    }}
                                >
                                    <video
                                        width="100%"
                                        height="100%"
                                        controls
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            borderRadius: "12px"
                                        }}
                                    >
                                        <source src="/demo.mp4" />
                                    </video>
                                </Box>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            <Box sx={{
                minHeight: "30vh",
                background: "#111827",
                display: "flex",
                alignItems: "center",
                py: 8
            }}>
                <Container maxWidth="xl" sx={{ width: "100%", px: { xs: 3, md: 8 } }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        mb={2}
                        fontWeight="bold"
                        sx={{
                            color: "#F3F4F6",
                            fontSize: { xs: "2rem", md: "2.5rem" }
                        }}
                    >
                        Processing Pipeline
                    </Typography>
                    <Typography
                        textAlign="center"
                        sx={{
                            color: "#6B7280",
                            mb: 8,
                            maxWidth: "600px",
                            mx: "auto"
                        }}
                    >
                        From raw point cloud data to production-ready 3D meshes in four automated steps
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {processImages.map((item, index) => (
                            <Grid item xs={12} sm={6} lg={3} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        background: "#1F2937",
                                        borderRadius: 3,
                                        border: "1px solid rgba(255,255,255,0.05)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: "0 20px 40px rgba(34,211,238,0.2)",
                                            border: "1px solid rgba(34,211,238,0.3)"
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 200,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "#0b0f19",
                                            p: 2
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={item.img}
                                            alt={item.title}
                                            sx={{
                                                maxHeight: "100%",
                                                maxWidth: "100%",
                                                objectFit: "contain"
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        py: 3
                                    }}>
                                        <Typography
                                            textAlign="center"
                                            fontWeight="600"
                                            sx={{
                                                color: "#F3F4F6",
                                                fontSize: "1.05rem"
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                py:8
            }}>
                <Container maxWidth="lg" sx={{ width: "50%" }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        mb={2}
                        fontWeight="bold"
                        sx={{
                            color: "#F3F4F6",
                            fontSize: { xs: "2rem", md: "2.5rem" }
                        }}
                    >
                        Core Technologies
                    </Typography>
                    <Typography
                        textAlign="center"
                        sx={{
                            color: "#6B7280",
                            mb: 8,
                            maxWidth: "600px",
                            mx: "auto"
                        }}
                    >
                        Built with industry-leading tools for robust 3D processing
                    </Typography>

                    <Grid container spacing={4} alignItems="stretch">
                        {[{
                            icon: <PrecisionManufacturingIcon sx={{ fontSize: 56, mb: 2, color: "#4ade80" }} />,
                            title: "Point Cloud Processing",
                            description: "Open3D based filtering, clustering and segmentation with real-time feedback."
                        },{
                            icon: <AutoAwesomeIcon sx={{ fontSize: 56, mb: 2, color: "#22d3ee" }} />,
                            title: "Optimization",
                            description: "Parameter tuning for robust feature detection and filtering."
                        },{
                            icon: <ViewInArIcon sx={{ fontSize: 56, mb: 2, color: "#a78bfa" }} />,
                            title: "Mesh Reconstruction",
                            description: "Poisson surface reconstruction for watertight, production-ready models."
                        }].map((feat, idx) => (
                            <Grid item xs={12} md={4} key={idx} sx={{ display: "flex" }}>
                                <Card
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        background: "linear-gradient(145deg, #1F2937, #111827)",
                                        p: 4,
                                        borderRadius: 3,
                                        border: "1px solid rgba(255,255,255,0.05)",
                                        textAlign: "center",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                                            border: "1px solid rgba(255,255,255,0.1)"
                                        }
                                    }}
                                >
                                    <Box sx={{ mb: 2 }}>
                                        {feat.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mt: 2,
                                            mb: 2,
                                            color: "#F3F4F6",
                                            fontWeight: 600,
                                            minHeight: "64px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        {feat.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#6B7280",
                                            lineHeight: 1.7,
                                            fontSize: "0.95rem",
                                            flexGrow: 1
                                        }}
                                    >
                                        {feat.description}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{
                minHeight: "10vh",
                background: "#111827",
                display: "flex",
                alignItems: "center",
                py: 3
            }}>
                <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
                    <Typography
                        variant="h3"
                        textAlign="center"
                        mb={2}
                        fontWeight="bold"
                        sx={{
                            color: "#F3F4F6",
                            fontSize: { xs: "2rem", md: "2.5rem" }
                        }}
                    >
                        Results
                    </Typography>
                    <Typography
                        textAlign="center"
                        sx={{
                            color: "#6B7280",
                            mb: 8,
                            maxWidth: "600px",
                            mx: "auto"
                        }}
                    >
                        Production-quality outputs ready for automated inspection
                    </Typography>

                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="/images/result.png"
                                alt="3D reconstruction result"
                                width="100%"
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                                    border: "1px solid rgba(255,255,255,0.05)"
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{
                                    color: "#F3F4F6",
                                    fontWeight: 600,
                                    mb: 3
                                }}
                            >
                                High quality 3D reconstruction
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#6B7280",
                                    lineHeight: 1.8,
                                    fontSize: "1.05rem",
                                    mb: 4
                                }}
                            >
                                Our pipeline produces clean, smooth, and watertight meshes with
                                accurate geometry preservation. Perfect for automated quality control,
                                inspection workflows, and digital twin applications.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer>

            </Footer>
        </Box>
    );
}