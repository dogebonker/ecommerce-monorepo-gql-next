import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Popover, { PLACEMENT } from "../../../components/Popover/Popover";
import Notification from "../../../components/Notification/Notification";
import { AuthContext } from "../../../context/auth";
import { STUFF_MEMBERS, SETTINGS } from "../../../settings/constants";
import {
  NotificationIcon,
  AlertDotIcon,
  ArrowLeftRound
} from "../../../components/AllSvgIcon";
import {
  TopbarWrapper,
  Logo,
  LogoImage,
  TopbarRightSide,
  ProfileImg,
  Image,
  AlertDot,
  NotificationIconWrapper,
  UserDropdowItem,
  NavLink,
  LogoutBtn,
  DrawerIcon,
  CloseButton,
  DrawerWrapper
} from "./Topbar.style";
import Logoimage from "../../../image/PickBazar.png";
import UserImage from "../../../image/user.jpg";
import { useDrawerDispatch } from "../../../context/DrawerContext";
import { MenuIcon } from "../../../components/AllSvgIcon";
import Drawer, { ANCHOR } from "../../../components/Drawer/Drawer";
import Sidebar from "../Sidebar/Sidebar";

const data = [
  {
    title: "Delivery Successful",
    time: "5m",
    message: "Order #34567 had been placed"
  }
];
const Topbar = ({ refs }: any) => {
  const dispatch = useDrawerDispatch();
  const { signout } = React.useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const openDrawer = useCallback(
    () => dispatch({ type: "OPEN_DRAWER", drawerComponent: "PRODUCT_FORM" }),
    [dispatch]
  );

  return (
    <TopbarWrapper ref={refs}>
      <Logo>
        <Link to="/">
          <LogoImage src={Logoimage} alt="pickbazar-admin" />
        </Link>
      </Logo>

      <DrawerWrapper>
        <DrawerIcon onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </DrawerIcon>
        <Drawer
          isOpen={isDrawerOpen}
          anchor={ANCHOR.left}
          onClose={() => setIsDrawerOpen(false)}
          overrides={{
            Root: {
              style: {
                zIndex: "1"
              }
            },
            DrawerBody: {
              style: {
                marginRight: "0",
                marginLeft: "0",
                "@media only screen and (max-width: 767px)": {
                  marginLeft: "30px"
                }
              }
            },
            DrawerContainer: {
              style: {
                width: "270px",
                "@media only screen and (max-width: 767px)": {
                  width: "80%"
                }
              }
            },
            Close: {
              component: () => (
                <CloseButton onClick={() => setIsDrawerOpen(false)}>
                  <ArrowLeftRound />
                </CloseButton>
              )
            }
          }}
        >
          <Sidebar onMenuItemClick={() => setIsDrawerOpen(false)} />
        </Drawer>
      </DrawerWrapper>

      <TopbarRightSide>
        <Button onClick={openDrawer}>Add Products</Button>

        <Popover
          content={({ close }) => <Notification data={data} onClear={close} />}
          accessibilityType={"tooltip"}
          placement={PLACEMENT.bottomRight}
          overrides={{
            Body: {
              style: () => ({
                width: "330px",
                zIndex: 2
              })
            }
          }}
        >
          <NotificationIconWrapper>
            <NotificationIcon />
            <AlertDot>
              <AlertDotIcon />
            </AlertDot>
          </NotificationIconWrapper>
        </Popover>

        <Popover
          content={({ close }) => (
            <UserDropdowItem>
              <NavLink to={STUFF_MEMBERS} exact={false} onClick={close}>
                Staff
              </NavLink>
              <NavLink to={SETTINGS} exact={false} onClick={close}>
                Settings
              </NavLink>
              <LogoutBtn
                onClick={() => {
                  signout();
                  close();
                }}
              >
                Logout
              </LogoutBtn>
            </UserDropdowItem>
          )}
          accessibilityType={"tooltip"}
          placement={PLACEMENT.bottomRight}
          overrides={{
            Body: {
              style: () => ({
                width: "220px",
                zIndex: 2
              })
            }
          }}
        >
          <ProfileImg>
            <Image src={UserImage} alt="user" />
          </ProfileImg>
        </Popover>
      </TopbarRightSide>
    </TopbarWrapper>
  );
};

export default Topbar;
