import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { SystemAdminMenu } from './SystemAdminMenu'

function SystemAdminDashboard() {
  return (
    <Box>
        <SystemAdminMenu />
      <Outlet/>
    </Box>
  )
}

export default SystemAdminDashboard