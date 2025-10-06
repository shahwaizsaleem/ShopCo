import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Rating
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import herobg from "../assets/herobg.png";
import versace from "../assets/versace.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import zara from "../assets/zara.png";
import ck from "../assets/ck.png";
import t1 from "../assets/t1.png";
import p1 from "../assets/p1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import casual from "../assets/casual.png";
import formal from "../assets/formal.png";
import party from "../assets/party.png";
import gym from "../assets/gym.png";
// ✅ Example product arrays
const products = [
  { id: 1, name: "T-shirt with Tape Details", price: 120, rating: 4.5, image: t1},
  { id: 2, name: "Skinny Fit Jeans", price: 240, oldPrice: 260, discount: "-20%", rating: 3.5, image: p1 },
  { id: 3, name: "Checkered Shirt", price: 180, rating: 4.5, image: t2 },
  { id: 4, name: "Sleeve Striped T-shirt", price: 130, oldPrice: 160, discount: "-30%", rating: 4.5, image: t3 },
  { id: 5, name: "Denim Jacket", price: 300, rating: 4.0, image: "/jacket.png" },
  { id: 6, name: "Casual Hoodie", price: 220, rating: 4.2, image: "/hoodie.png" },
];

const new_arrival = [
  { id: 1, name: "VERTICAL STRIPED SHIRT", price: 200, rating: 4.7, image: t4 },
  { id: 2, name: "COURAGE GRAPHIC T-SHIRT", price: 150, rating: 4.2, image: t5 },
  { id: 3, name: "LOOSE FIT BERMUDA SHORTS", price: 280, rating: 4.6, image: p2},
  { id: 4, name: "FADED SKINNY JEANS", price: 100, rating: 3.9, image: p3 },
  { id: 5, name: "FADED SKINNY JEANS", price: 320, rating: 4.3, image: "/formal.png" },
];

const testimonials = [
  { id: 1, name: "Sarah M.", review: "I'm blown away by the quality and style of the clothes I received. Every piece exceeded my expectations." },
  { id: 2, name: "Alex K.", review: "Finding clothes that align with my style used to be hard. Shop.co made it so easy!" },
  { id: 3, name: "James L.", review: "Always on the lookout for unique fashion. Shop.co nails it every time." },
  { id: 4, name: "Monica T.", review: "Trendy, comfy, and fast delivery. My go-to fashion shop now!" },
];

// ✅ Product Card
function ProductCard({ product }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor:"#F0EEED",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
         sx={{ height: 250, objectFit: "contain", borderRadius: 2 }}
      />
      <Typography variant="subtitle1" fontWeight={600} mt={1}>
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ★★★★☆ <span style={{ marginLeft: 8 }}>{product.rating}/5</span>
      </Typography>
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <Typography variant="h6" fontWeight="bold">
          ${product.price}
        </Typography>
        {product.oldPrice && (
          <>
            <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
              ${product.oldPrice}
            </Typography>
            <Typography variant="body2" color="error">
              {product.discount}
            </Typography>
          </>
        )}
      </Box>
    </Card>
  );
}

// ✅ Card Section
function CardSection({ title, items }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <Container sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        {title}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {visibleItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
      {items.length > 4 && (
        <Button
          onClick={() => setShowAll(!showAll)}
          variant="outlined"
          sx={{ mt: 4, borderRadius: 5 }}
        >
          {showAll ? "Show Less" : "View All"}
        </Button>
      )}
    </Container>
  );
}

// ✅ Browse By Dress Style Section
function BrowseByDressStyle() {
  return (
    <Box
    sx={{
      bgcolor: "grey.100",
      borderRadius: 4,
      p: 4,
      maxWidth: "1000px",
      mx: "auto",
      mt: 6,
    }}
  >
    <Typography variant="h5" fontWeight="bold" align="center" mb={3}>
      BROWSE BY DRESS STYLE
    </Typography>

    <Grid container spacing={2} justifyContent="center">
      {/* Casual */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            position: "relative",
            height: 240, // ✅ lock card height
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={casual}
            alt="Casual"
            sx={{
              position: "absolute", // ✅ image doesn't affect card size
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "zoom",
              transform: "scale(2)",
              ml:20,
              objectPosition: "left top", // ✅ you can move freely
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: 10,
              left: 30,
              fontWeight: 700,
              fontSize: "30px",
              color: "black",
            }}
          >
            Casual
          </Typography>
        </Card>
      </Grid>

      {/* Formal */}
      <Grid item xs={12} sm={6} md={8}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            position: "relative",
            height: 240,
            
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={formal}
            alt="Formal"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "scale(1.75)",
              ml:30,
              objectPosition: "center top",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: 10,
              left: 30,
              fontWeight: 700,
              fontSize: "30px",
              color: "black",
            }}
          >
            Formal
          </Typography>
        </Card>
      </Grid>

      {/* Party */}
      <Grid item xs={12} sm={6} md={8}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            position: "relative",
            height: 240,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={party}
            alt="Party"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              ml:10,
              objectPosition: "center ",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: 10,
              left: 30,
              fontWeight: 700,
              fontSize: "30px",
              color: "black",
            }}
          >
            Party
          </Typography>
        </Card>
      </Grid>

      {/* Gym */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            position: "relative",
            height: 240,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={gym}
            alt="Gym"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: 10,
              left: 30,
              fontWeight: 700,
              fontSize: "30px",
              color: "black",
            }}
          >
            Gym
          </Typography>
        </Card>
      </Grid>
    </Grid>
  </Box>
  );
}

export default function Homepage() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <Box component="section">
      {/* ✅ Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: 400, md: 500 },
          display: "flex",
          alignItems: "center",
          position: "relative",
          px: { xs: 2, md: 10 },
        }}
      >
        <Box maxWidth="600px" zIndex={10}>
          <Typography variant="h3" fontWeight="bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Typography>
          <Typography variant="body1" mt={2}>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality.
          </Typography>
          <Button variant="contained" sx={{ mt: 3,backgroundColor: "black", borderRadius: 2, px: 4 }}>
            Shop Now
          </Button>

          <Grid container spacing={3} mt={5}>
            <Grid item>
              <Typography variant="h4" fontWeight="bold">200+</Typography>
              <Typography variant="body2">International Brands</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="bold">2000+</Typography>
              <Typography variant="body2">High-Quality Products</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="bold">30,000+</Typography>
              <Typography variant="body2">Happy Customers</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ✅ Brands Section */}
<Box
  sx={{
    bgcolor: "black",
    py: 2,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "nowrap", // makes it responsive if screen is small
  }}
>
  {[versace, gucci, prada, zara, ck].map((src, i) => (
    <Box
      key={i}
      component="img"
      src={src}
      alt={`brand-${i}`}
      sx={{ height: 30, objectFit: "contain", mx: 2 }}
    />
  ))}
</Box>

      {/* ✅ Product Sections */}
      <CardSection title="New Arrivals" items={products} />
      <Box sx={{ mx: "auto", width: "80%", height: 1, bgcolor: "grey.300" }} />
      <CardSection title="Top Selling" items={new_arrival} />

      {/* ✅ Browse By Dress Style Section (ADDED HERE) */}
      <BrowseByDressStyle />

      {/* ✅ Testimonials Section */}
      <Container sx={{ mt: 8 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" fontWeight="bold">OUR HAPPY CUSTOMERS</Typography>
          <Box>
            <IconButton onClick={prevSlide} sx={{ bgcolor: "black", color: "white", mr: 1 }}>
              <ChevronLeft />
            </IconButton>
            <IconButton onClick={nextSlide} sx={{ bgcolor: "black", color: "white" }}>
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        <Box overflow="hidden">
          <Box
            display="flex"
            sx={{
              transition: "transform 0.5s",
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((t) => (
              <Box key={t.id} sx={{ minWidth: { xs: "100%", sm: "50%", md: "33.33%" }, p: 2 }}>
                <Card sx={{ borderRadius: 3, p: 3, height: "100%" }}>
                  <Typography color="warning.main">★★★★★</Typography>
                  <Typography fontWeight="bold" mt={1}>
                    {t.name} <span style={{ color: "green" }}>✔</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    "{t.review}"
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
