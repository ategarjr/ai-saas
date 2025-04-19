import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
  ThemeProvider,
  createTheme,
} from "flowbite-react";

const customTheme = createTheme({
  // size: {
  //   xl: "px-6 py-3 text-lg",
  // },
});

const Header = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar className="px-5">
        <NavbarBrand href="https://flowbite-react.com">
          <img
            src="/logo.png"
            className="mr-3 h-6 sm:h-9 xs:h-9 2xs:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Moviu
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </ThemeProvider>
  );
};

export default Header;

// color scheme
// [#a6c1ee] sign in button
// [#87acce] sign in button hover

{
  /* <Button>Click Me</Button> */
}

{
  /* <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="">
            <img className="w-16 p-2" src="./logo.png" alt="Logo" />  
        </div>
        <div className="absolute bg-white min-h-[60vh] left-0 top-[7%] w-full flex items-center px-5 z-1">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li><a href="#" className="hover:text-gray-500">Movie</a></li> 
                <li><a href="#" className="hover:text-gray-500">Television</a></li> 
                <li><a href="#" className="hover:text-gray-500">People</a></li> 
                <li><a href="#" className="hover:text-gray-500">Services</a></li> 
                <li><a href="#" className="hover:text-gray-500">Solutions</a></li> 
            </ul>
        </div>
        <div className="">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acce] cursor-pointer">Sign In</button>
        </div>
      </nav> */
}
