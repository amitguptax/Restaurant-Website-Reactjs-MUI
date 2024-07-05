import React from 'react'
import Layout from '../component/Layout'
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Where culinary excellence meets a warm and inviting atmosphere.
         Nestled in the heart of the city, 
         our establishment is dedicated to providing you with an unforgettable dining experience.
          Whether you're here for a casual lunch, a romantic dinner, 
          or a special celebration, we are committed to making every visit memorable.
        </p>
        <br />
        <Typography variant="h5">Our Story </Typography>
        <p>At My Restaurant, we believe that great food starts with great ingredients.
         Our journey began with a passion for fresh, locally-sourced produce and a desire to create dishes that celebrate the rich flavors of our region.
          Our chefs meticulously craft each dish with a blend of traditional techniques and innovative twists,
           ensuring that every bite is a delightful experience.
            </p>
         <br/>
         <Typography variant="h5">Ambiance and Atmosphere </Typography>
        <p>
        A From the moment you step through our doors, 
        you'll be greeted by a cozy and elegant ambiance.
         Our décor combines modern sophistication with rustic charm, 
         creating a space that is both comfortable and stylish. Soft lighting, 
         tasteful artwork, and carefully curated music set the perfect mood for any occasion.
            </p>
         <br/>
         <Typography variant="h5">Our Menu </Typography>
        <p>
        Our menu is a celebration of seasonal ingredients and culinary creativity.
        We offer a diverse selection of dishes, from classic favorites to bold new creations. 
        Start your meal with our signature appetizers, like the crispy calamari or the artisanal cheese board.
        For the main course, choose from a variety of options, including succulent steaks, 
        fresh seafood, and vegetarian delights. Each dish is prepared to perfection, with attention to detail and a commitment to flavor.
        We also take pride in our dessert menu, 
        featuring indulgent treats like the rich chocolate fondant and the refreshing lemon tart.
        Pair your meal with a selection from our extensive wine list, curated to complement the flavors of our dishes.
         Our knowledgeable staff is always on hand to help you choose the perfect pairing.
            </p>
         <br/>
         <Typography variant="h5">Exceptional Service</Typography>
        <p>  
         At My Restaurant, we believe that exceptional food should be accompanied by exceptional service.
         Our team is dedicated to making your dining experience as enjoyable as possible. 
         From the friendly greeting at the door to the attentive service at your table,
          we strive to exceed your expectations. Whether you have dietary preferences, special requests, 
          or simply need a recommendation, our staff is here to ensure your visit is tailored to your needs.
            </p>
         <br/>
         <Typography variant="h5">Community and Sustainability</Typography>
        <p>
        We are proud to be a part of this vibrant community and are committed to giving back.
        We source many of our ingredients from local farmers and producers, 
        supporting sustainable practices and the local economy.
        Our efforts to reduce waste and minimize our environmental footprint are an integral part of our philosophy.
        </p>
        <br/>
        <Typography variant="h5">Join Us</Typography>
        <p>
        Whether you're a regular guest or visiting for the first time,
        we invite you to join us at My Restaurant. Come savor the flavors, 
        enjoy the ambiance, and experience the exceptional service that sets us apart.
         We look forward to welcoming you and creating memories that will last a lifetime.
      </p>
      <br/>
      <p>
Thank you for choosing My Restaurant. 
We are excited to share our passion for food and hospitality with you. See you soon!
        </p>

      </Box>
    </Layout>
  );
};

export default About;