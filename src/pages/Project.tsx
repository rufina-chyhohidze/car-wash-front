import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider
} from "@mui/material";
import Footer from "../components/Footer.tsx";

const projectSections = [
    {
        title: "Problem Statement",
        content: `
The goal of this project is to transform .pcd data of a car into an accurate 3D mesh and export it as an STL file, ensuring critical details such as mirrors, tow bars, and bull bars are preserved.  

We remove environmental noise like floors, ceilings, walls, and statistical outliers, while highlighting important car features: wheels, mirrors, roof, and front/rear extremes.  
The result is a mesh ready for automated car wash systems.
`
    },
    {
        title: "Project Flow & Weeks",
        content: `
        Work Plan \n
        1. Extract raw point cloud data from OVP-based camera system  
2. Filter noise and erroneous measurements  
3. Detect and preserve critical vehicle features  
4. Handle abnormal or unsafe data conditions  
5. Convert processed point cloud into watertight 3D mesh  
6. Export as STL for downstream path-planning algorithms\n \n \n
**Week 1:** Exploration and understanding of 3D point cloud structure. Learned plane segmentation, downsampling, and initial filtering.  

**Week 2:** Diagnostic scripts to inspect raw .pcd data. Categorized points, identified car features, visualized noise vs invalid measurements.  

**Weeks 3-4:** Configurable filtering parameters in YAML, tuned noise removal, experimented with side plane cleaning, and meshing algorithms (Poisson, Alpha, Ball Pivoting). Applied smoothing filters to improve mesh quality.
`
    },
    {
        title: "AI Foundation Models for Car Part Recognition",
        content: `
We made a research on 3D deep learning models: PointNet and PointNet++.  

**PointNet:** Processes each point independently with shared MLPs and symmetric max pooling for permutation invariance.  

**PointNet++:** Hierarchical feature learning with Set Abstraction (SA) modules, sampling, grouping, and local PointNet layers for robust detection of car features like wheels, mirrors, and roof.  

Advantages: Works directly on XYZ point cloud data, high accuracy.  
Limitations: Requires training data, GPU, and takes several weeks for integration.
`
    },
    {
        title: "End Goal & Success Criteria",
        content: `
Deliver a working POC program capable of converting raw point clouds into accurate STL meshes with preserved car details.  
Success is measured by high-fidelity meshes with correct geometry for mirrors, bull bars, tow bars, and smooth surfaces suitable for automated processing.
`
    }
];

export default function Project() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
                background: "#0b0f19",
                color: "#ffffff"
            }}
        >
            <Box sx={{ flexGrow: 1, py: 10 }}>
                {/* Page Header */}
                <Box sx={{ textAlign: "center", mb: 10, px: { xs: 3, md: 8 } }}>
                    <Typography variant="h3" fontWeight="bold" mb={2} sx={{ color: "#F3F4F6" }}>
                        Project Description
                    </Typography>
                    <Typography sx={{ color: "#6B7280", maxWidth: 700, mx: "auto", lineHeight: 1.6 }}>
                        A detailed walkthrough of our CareWash project, from raw point cloud data to production-ready 3D meshes for automated car wash systems.
                    </Typography>
                </Box>

                <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
                    <Grid container spacing={6}>
                        {projectSections.map((section, idx) => (
                            <Grid size={{xs:12}} key={idx}>
                                <Card
                                    sx={{
                                        background: "linear-gradient(145deg, #1F2937, #111827)",
                                        borderRadius: 3,
                                        p: 4,
                                        border: "1px solid rgba(255,255,255,0.05)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow: "0 20px 40px rgba(34,211,238,0.2)"
                                        }
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "#F3F4F6" }}>
                                            {section.title}
                                        </Typography>
                                        <Divider sx={{ mb: 2, borderColor: "rgba(255,255,255,0.1)" }} />
                                        <Typography sx={{ color: "#6B7280", whiteSpace: "pre-line", lineHeight: 1.7 }}>
                                            {section.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Footer>

            </Footer>
        </Box>
    );
}