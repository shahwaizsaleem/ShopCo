import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay, FaGooglePay } from "react-icons/fa";


export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "grey.200", mt: 15, position: "relative" }}>
      {/* Newsletter Box */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", md: "1240px" },
          bgcolor: "black",
          borderRadius: 3,
          color: "white",
          px: { xs: 4, md: 8 },
          py: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: 3,
          gap: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", maxWidth: 400 }}>
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </Typography>

        <Box sx={{ width: { xs: "100%", md: 350 }, display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Enter your email address"
            variant="outlined"
            size="medium"
            sx={{
              bgcolor: "white",
              borderRadius: 5,
              "& fieldset": { border: "none" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ArrowForwardIcon color="disabled" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "black",
              fontWeight: "bold",
              borderRadius: 5,
              "&:hover": { bgcolor: "grey.300" },
            }}
          >
            Subscribe to Newsletter
          </Button>
        </Box>
      </Box>

      {/* Footer Content */}
      <Container sx={{ pt: 20, pb: 6 }}>
        <Grid container spacing={4}>
          {/* Brand Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              SHOP.CO
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
  <IconButton sx={{ bgcolor: "grey.300", "&:hover": { bgcolor: "grey.400" } }}>
    <TwitterIcon />
  </IconButton>
  <IconButton sx={{ bgcolor: "grey.300", "&:hover": { bgcolor: "grey.400" } }}>
    <FacebookIcon />
  </IconButton>
  <IconButton sx={{ bgcolor: "grey.300", "&:hover": { bgcolor: "grey.400" } }}>
    <InstagramIcon />
  </IconButton>
  <IconButton sx={{ bgcolor: "grey.300", "&:hover": { bgcolor: "grey.400" } }}>
    <PinterestIcon />
  </IconButton>
</Box>
          </Grid>

          {/* Links */}
          {[
            { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
            { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
            { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
            { title: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
          ].map((section, idx) => (
            <Grid item xs={6} sm={6} md={2} key={idx}>
              <Typography fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              {section.links.map((link, i) => (
                <Typography key={i} variant="body2" color="text.secondary" sx={{ mb: 1, cursor: "pointer" }}>
                  {link}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Bottom Bar */}
    <Box
  sx={{
    mt: 5,
    pt: 3,
    borderTop: "1px solid",
    borderColor: "grey.400",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
  }}
>
  <Typography variant="body2" color="text.secondary">
    Shop.co © 2000–2023, All Rights Reserved
  </Typography>

  <Box sx={{ display: "flex", gap: 2 }}>
    <FaCcVisa size={32} color="#1A1F71" />
    <FaCcMastercard size={32} color="#EB001B" />
    <FaCcPaypal size={32} color="#003087" />
    <FaApplePay size={32} color="black" />
    <FaGooglePay size={32} color="#4285F4" />
  </Box>
</Box>
      </Container>
    </Box>
  );
}
