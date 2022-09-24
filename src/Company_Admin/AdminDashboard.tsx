import { Box } from "@chakra-ui/react";
import React from "react";
import {Outlet} from "react-router-dom"
import { CompanySideMenu } from "../Landing_Page/components/CompanySideMenu";



function AdminDashboard() {
  return (
    <Box>
      <CompanySideMenu />
      <Outlet/>
    </Box>
  );
}

export default AdminDashboard;
