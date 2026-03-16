import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Container
} from "@mui/material";
import Footer from "../components/Footer.tsx";

const teamMembers = [
    { name: "Lucas Belmans", role: "Frontend Developer", img: "/images/meme1.png" },
    { name: "Rufina Chyhohidze", role: "Backend Developer", img: "/images/rufina.jpg" },
    { name: "Filipe Kososki Guimarães", role: "Engineer", img: "/images/meme2.png" },
];

export default function About() {
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "#0b0f19",
            color: "#ffffff"
        }}>

            {/* MAIN CONTENT */}
            <Box sx={{ flexGrow: 1, py: 10 }}>
                {/* PAGE INTRO */}
                <Box sx={{ textAlign: "center", px: { xs: 3, md: 8 }, mb: 8 }}>
                    <Typography variant="h3" fontWeight="bold" mb={2} sx={{ color: "#F3F4F6" }}>
                        Meet the Team
                    </Typography>
                    <Typography sx={{ color: "#6B7280", maxWidth: 700, mx: "auto", lineHeight: 1.6 }}>
                        We are a passionate team of developers and engineers building CareWash. Each of us brings unique expertise to deliver high-quality, production-ready 3D car reconstruction solutions.
                    </Typography>
                </Box>

                {/* TEAM CARDS */}
                <Grid container spacing={6} justifyContent="center" px={{ xs: 3, md: 8 }}>
                    {teamMembers.map((member, idx) => (
                        <Grid item xs={12} sm={6} md={3} key={idx} display="flex" justifyContent="center">
                            <Card
                                sx={{
                                    width: 1,
                                    maxWidth: 300,
                                    background: "linear-gradient(145deg, #1F2937, #111827)",
                                    borderRadius: 3,
                                    textAlign: "center",
                                    transition: "0.3s",
                                    "&:hover": { transform: "translateY(-5px)", boxShadow: "0 15px 30px rgba(0,0,0,0.5)" }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={member.img}
                                    alt={member.name}
                                    sx={{ borderRadius: 3, objectFit: "cover" }}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: "#F3F4F6", fontWeight: 600, mb: 1 }}>
                                        {member.name}
                                    </Typography>
                                    <Typography sx={{ color: "#6B7280", fontSize: "0.95rem" }}>
                                        {member.role}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Footer>

            </Footer>

        </Box>
    );
}