import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Container,
    IconButton,
    Divider
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Footer from "../components/Footer.tsx";

const teamMembers = [
    {
        name: "Lucas Belmans",
        role: "Researcher",
        img: "/images/lucas.jpeg",
        linkedin: "#",
        qr: "/images/lucas-qr.png"
    },
    {
        name: "Rufina Chyhohidze",
        role: "Researcher",
        img: "/images/ruf.png",
        linkedin: "#",
        qr: "/images/rufina-qr.png"
    },
    {
        name: "Filipe Kososki Guimarães",
        role: "Researcher",
        img: "/images/filipe.jpeg",
        linkedin: "#",
        qr: "/images/filipe-qr.png"
    }
];

export default function About() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "#000000",
                color: "#ffffff"
            }}
        >

            {/* CONTENT */}
            <Box sx={{ flexGrow: 1, py: 10 }}>

                {/* INTRO */}
                <Box sx={{ textAlign: "center", px: { xs: 3, md: 8 }, mb: 8 }}>
                    <Typography variant="h3" fontWeight="bold" mb={2}>
                        Meet the Team
                    </Typography>

                    <Typography
                        sx={{
                            color: "#6B7280",
                            maxWidth: 700,
                            mx: "auto",
                            lineHeight: 1.6
                        }}
                    >
                        We are a passionate team building CareWash. Our combined
                        expertise spans software engineering, 3D processing,
                        and system architecture.
                    </Typography>
                </Box>

                {/* TEAM */}
                <Container maxWidth="xl">

                    <Grid container spacing={6} justifyContent="center">

                        {teamMembers.map((member, idx) => (

                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={idx}
                                display="flex"
                                justifyContent="center"
                            >

                                <Card
                                    sx={{
                                        width: 320,
                                        height: 460,
                                        display: "flex",
                                        flexDirection: "column",
                                        background:
                                            "linear-gradient(145deg,#1F2937,#111827)",
                                        borderRadius: 3,
                                        transition: "0.3s",

                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow:
                                                "0 20px 40px rgba(34,211,238,0.2)"
                                        }
                                    }}
                                >

                                    {/* PHOTO */}
                                    <CardMedia
                                        component="img"
                                        image={member.img}
                                        alt={member.name}

                                        sx={{
                                            height: 260,
                                            width: "100%",
                                            objectFit: "cover"
                                        }}
                                    />

                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between"
                                        }}
                                    >

                                        <Box>

                                            <Typography
                                                sx={{
                                                    color: "#ffffff"
                                                }}
                                                variant="h6"
                                                fontWeight="bold"
                                                mb={1}

                                            >
                                                {member.name}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "#6B7280",
                                                    mb: 2
                                                }}
                                            >
                                                {member.role}
                                            </Typography>

                                        </Box>

                                        <Divider
                                            sx={{
                                                borderColor:
                                                    "rgba(255,255,255,0.08)",
                                                mb: 2
                                            }}
                                        />

                                        {/* LINKS */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}
                                        >

                                            {/* LinkedIn */}
                                            <IconButton
                                                href={member.linkedin}
                                                target="_blank"
                                                sx={{
                                                    color: "#22d3ee"
                                                }}
                                            >
                                                <LinkedInIcon />
                                            </IconButton>

                                            {/* QR */}
                                            <Box
                                                component="img"
                                                src={member.qr}
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    borderRadius: 1,
                                                    background: "white",
                                                    padding: "4px"
                                                }}
                                            />

                                        </Box>

                                    </CardContent>

                                </Card>

                            </Grid>

                        ))}

                    </Grid>

                </Container>

            </Box>

            <Footer />

            <Footer />
        </Box>
    );
}