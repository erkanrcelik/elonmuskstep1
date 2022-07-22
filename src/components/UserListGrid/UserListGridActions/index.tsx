import UserListGridActionsButton from "./UserListGridActionsButton";

const UserListGridActions = () => {
    return (
        <>
            <UserListGridActionsButton iconName="favorite_border" color="rgb(255, 0, 0)" size="medium"></UserListGridActionsButton>
            <UserListGridActionsButton iconName="border_color_outlined" color="rgba(0,0,0,.65)" size="small"></UserListGridActionsButton>
            <UserListGridActionsButton iconName="delete" color="rgba(0,0,0,.65)" size="small"></UserListGridActionsButton>
        </>
    );
}

export default UserListGridActions;