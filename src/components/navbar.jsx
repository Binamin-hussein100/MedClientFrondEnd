import React from "react";
import { Link as NavLi } from "react-router-dom";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
            <NavbarBrand as={NavLi} to="/">
            <img  className="w-20 h-20" src="https://res.cloudinary.com/kingbin/image/upload/v1716285882/Medcohort-removebg-preview_axhlxz.svg" alt="MED COHORT" />          
            </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <Link color="foreground" href="#">
                How it works!
            </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link as={NavLi} to="/newOrder" href="#" aria-current="page">
            New Order
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem  className="hidden lg:flex">
          <Link as={NavLi} to="/signin" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
            <Button as={NavLi} to="/signup" color="primary" href="#" variant="flat">
                  Sign Up
            </Button>
        </NavbarItem>
          
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
