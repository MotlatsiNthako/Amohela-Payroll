
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import { FcApproval, FcAdvance } from "react-icons/fc";
import { GoReport } from "react-icons/go";

interface AppProps {
   link: string;
   image: object;
   label: string;
   children?: React.ReactNode;
 }

function SideBarMenuItem(props: AppProps) {
  const { link, image, label } = props;

  return (
    <Box
      w="full"
      h="4.6875em"
      justifyContent="center"
      borderRadius="sm"
      py="3"
      alignItems="center"
      _hover={{
        color: "white",
      }}
    >
      <Link to={link}>
        <Flex
          direction="column"
          color="white"
          h="4.6875em"
          justify="center"
          alignItems="center"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          p="8"
          mx="4"
          _hover={{
            bg: "green.400",
            color: "white",
          }}
        >
          <>
            {image}
            <Text pb={6}>{label}</Text>
          </>
        </Flex>
      </Link>
    </Box>
  );
}

export function CompanySideMenu() {
  const [hideMenu, setHideMenu] = useState(false);
  return (
    <Flex
      pos="fixed"
      h="100vh"
      w={hideMenu && hideMenu === true ? "6em" : "12.6em"}
      flexDir="column"
      justifyContent="space-between"
      p="10"
      backgroundColor="#2A8C57"
      zIndex="popover"
    ><Text textAlign="center" fontSize="2xl" fontWeight="bold" as={'a'}
    href={"admin"}>Amo</Text>
      <SideBarMenuItem
        link="company"
        image={<FiHome size={40} />}
        label="Home"
      />
      <SideBarMenuItem
        link="employees"
        image={<FaCity size={40} />}
        label="Employees"
      />
      <SideBarMenuItem
        link="approvals"
        image={<FcApproval size={40} />}
        label="Approvals"
      />

      <SideBarMenuItem
        link="advances"
        image={<FcAdvance size={40} />}
        label="Advances"
      />
      <SideBarMenuItem link="reports" image={<GoReport size={40} />} label="Reports" />
    </Flex>
  );
}

