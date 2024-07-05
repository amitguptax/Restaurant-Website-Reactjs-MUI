import React from 'react'
import Layout from '../component/Layout'
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BusinessIcon from '@mui/icons-material/Business';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
    <Box sx={{ my: 10, ml: 5, "& h6": { fontWeight: "bold", mb: 2 } }}>
      <Typography variant="h4">Contact My Resturant</Typography>
      <p>
      "The best Chinese Restraunt I have ever been to!
       And that's saying a lot as have been to many!"
      "Amazing food! Great Service! Couldn't ask for more!
       I'll be back again and again"
       We are excited to hear from you! For reservations,
        inquiries, or feedback, feel free to reach out to us. 
      </p>
    </Box>
    <Box
      sx={{
        m: 3,
        width: "600px",
        ml: 10,
        "@media (max-width:600px)": {
          width: "300px",
        },
      }}
    >
      <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ bgcolor: "black", color: "white" }}
                align="center"
              >
                Contact Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <BusinessIcon sx={{ color: "red", pt: 1 }} /> 127/25/W-1, Barra Bypass Rd,
Opposite Parag Nagar, Niralanagar Juhi, Juhi Kalan, Juhi,
Kanpur, Uttar Pradesh 208014
                
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <AccessTimeFilledIcon sx={{ color: "black", pt: 1 }} /> We are open Monday to Friday from 11 AM to 10 PM, and Saturday to Sunday from 10 AM to 11 PM.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <MailIcon sx={{ color: "skyblue", pt: 1 }} />  info@myrestaurant.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CallIcon sx={{ color: "green", pt: 1 }} /> (123) 456-7890
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Layout>
  )
}

export default Contact
