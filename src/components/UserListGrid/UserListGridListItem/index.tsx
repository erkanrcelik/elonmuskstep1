import { Icon, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import IUserListGridListItem from "../../../models/UserListGridList";

const UserListGridListItem = (props: IUserListGridListItem) => {
    return (
        <ListItem disablePadding >
            <ListItemIcon  >
                <Icon fontSize="small">{props.iconName}</Icon>
            </ListItemIcon>
            <ListItemText
                primaryTypographyProps={{ fontSize: "14px", color: "rgba(0,0,0,.65)", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol" }}
                primary={props.text}
            />
        </ListItem>
    );
}

export default UserListGridListItem;
