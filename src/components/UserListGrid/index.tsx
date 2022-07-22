import { Grid, Card, CardMedia, CardContent, Typography, List, CardActions } from "@mui/material";
import IUserListGrid from "../../models/UserModel";
import UserListGridListItem from "./UserListGridListItem";
import UserListGridActions from "./UserListGridActions";

const UserListGrid = (props: IUserListGrid) => {
    return (
        <Grid item xs={3} sx={{
            minWidth: "300px", marginLeft: "0px"
        }} >
            <Card elevation={0} sx={{ border: "1px solid #e8e8e8" }} >
                {/* Card Media */}
                <CardMedia
                    component="img"
                    image={`https://avatars.dicebear.com/v2/avataaars/${props.name}.svg?options%5Bmood%5D%5B%5D=happy`}
                    sx={{
                        padding: 0,
                        maxWidth: "100%",
                        backgroundColor: "#f5f5f5",
                        height: "200px",
                        objectFit: "fill"
                    }}
                />
                {/* Card Content */}
                <CardContent sx={{
                    padding: "24px",
                    '& .MuiListItemIcon-root': {
                        minWidth: "35px"
                    }
                }}>
                    <Typography color="rgba(0,0,0,.85)" fontWeight="500" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol" variant="subtitle1">
                        {props.name}
                    </Typography>

                    <List disablePadding dense>
                        <UserListGridListItem text={props.email} iconName="mail_outlined"></UserListGridListItem>
                        <UserListGridListItem text={props.phone} iconName="phone_enabled_outlined"></UserListGridListItem>
                        <UserListGridListItem text={props.website} iconName="language_outlined"></UserListGridListItem>
                    </List>
                </CardContent>
                {/* Card Actions */}
                <CardActions sx={{
                    borderTop: "1px solid #e8e8e8",
                    alignItems: "center",
                    padding: "12px",
                    backgroundColor: "#fafafa"
                }}>
                    <UserListGridActions></UserListGridActions>
                </CardActions>
            </Card >
        </Grid >);
}

export default UserListGrid;