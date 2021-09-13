import React from "react";
import {
  HFlex,
  Image,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  Tooltip,
} from "../../components";

import { PROJECT_LINK } from "../../config/constants";
import { EditIcon } from "@chakra-ui/icons";
import { FaBookmark, FaRegPaperPlane, FaUserFriends } from "react-icons/fa/";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../store/selector";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions";
interface CustomButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  active: boolean;
  value: string;
}

function CustomButton({ onClick, active, value }: CustomButtonProps) {
  return (
    <Button
      variant="unstyled"
      _hover={{ textDecoration: "underline", color: "gray.600" }}
      onClick={onClick}
      color={active ? "gray.700" : "gray.400"}
      mx="3"
      p="0"
    >
      {value}
    </Button>
  );
}

interface HeaderProps {
  absolutePos?: boolean;
}
export default function Header({ absolutePos }: HeaderProps) {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const userDetails = useTypedSelector(
    (state) => state.globalState.userDetails
  );
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <HFlex
      position={absolutePos ? "absolute" : "relative"}
      top="0"
      w="100vw"
      borderBottom="solid 1px"
      borderBottomColor="gray.100"
      zIndex="10"
    >
      <HFlex w="100%" maxW="1250px" h="auto" py="2" px="4" mr="8">
        <Image
          src={require("../../assets/landing-page/logo-light-theme.svg")}
          w="auto"
          h="8"
          mr="auto"
          cursor="pointer"
          onClick={() => navigate("/questions")}
        />
        <HFlex mr="6">
          <CustomButton
            onClick={() => navigate("/questions")}
            active={currentPath === "/questions"}
            value="Questions"
          />
          <CustomButton
            onClick={() => navigate("/exams")}
            active={currentPath === "/exams"}
            value="Exams"
          />
        </HFlex>
        {!userDetails ? (
          <Tooltip
            label="You are not logged in"
            placement="bottom"
            closeDelay={1000}
            hasArrow
          >
            <Avatar
              size="sm"
              cursor="pointer"
              onClick={() => navigate("/login")}
            />
          </Tooltip>
        ) : (
          <Menu>
            <MenuButton>
              <Avatar
                size="sm"
                cursor="pointer"
                name={
                  userDetails.name ? userDetails.name : userDetails.username
                }
                src={userDetails.avatar}
              />
            </MenuButton>
            <MenuList borderColor="gray.100">
              <MenuItem
                icon={<FaBookmark size="16" />}
                onClick={() => navigate(`/users/${userDetails.username}`)}
              >
                {userDetails.username}
              </MenuItem>
              <MenuItem
                icon={<FaUserFriends size="16" />}
                onClick={() => navigate(`/users`)}
              >
                Discover People
              </MenuItem>
              <MenuItem
                icon={<EditIcon w={4} h={4} />}
                onClick={() => navigate("/settings/profile")}
              >
                Edit profile
              </MenuItem>
              <MenuItem
                icon={<FaRegPaperPlane size="16" />}
                onClick={() =>
                  window.open(PROJECT_LINK, "_blank", "noopener,noreferrer")
                }
              >
                Feedback
              </MenuItem>
              <MenuItem
                icon={<FiLogOut size="16" />}
                onClick={() => {
                  dispatch(logout());
                  toast({
                    title: "Logged out successfully.",
                    status: "success",
                    duration: 1200,
                    isClosable: true,
                    position: "top-right",
                  });
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </HFlex>
    </HFlex>
  );
}
