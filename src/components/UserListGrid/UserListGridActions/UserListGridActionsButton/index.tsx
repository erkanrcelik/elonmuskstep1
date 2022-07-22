import { Box, Icon } from "@mui/material";
import IUserListGridActionsButton from "../../../../models/UserListGridActionsButton";

const UserListGridActionsButton = (props: IUserListGridActionsButton) => {
    return (
        <Box
            sx={{
                width: "33.3333%",
                display: 'flex',
                justifyContent: "center",
                borderRight: "1px solid #e8e8e8"
            }}
        >
            <Icon fontSize={props.size} sx={{ color: `${props.color}` }}>{props.iconName}</Icon>
        </Box >
    );
}

export default UserListGridActionsButton;