import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ background: "#05070d", py: 3, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
                <Typography textAlign="center" sx={{ color: "#4B5563", fontSize: "0.95rem" }}>
                    CareWash Project • 2026
                </Typography>
            </Container>
        </Box>
    );
}