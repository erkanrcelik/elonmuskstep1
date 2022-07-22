import { Grid } from '@mui/material';
import UserListGrid from '../../components/UserListGrid';
import { useUsersQuery } from '../../services/UserApi';

const HomePages = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery();
    return (
        <>
            {isLoading && <h1>Veri Yükleniyor</h1>}
            {
                isFetching && <h1>Veri Aliniyor</h1>
            }
            {isSuccess &&

                <Grid container spacing={4} xs={12} padding="7px" sx={{
                    '& .MuiGrid-root': {
                        margin: 0
                    }
                }
                }>
                    {data.map((val, index) => <UserListGrid key={index} name={val["name"]} email={val.email} phone={val.phone} website={val.website} ></UserListGrid>)}
                </Grid>
            }
            {
                error &&
                <h1>Sistem Hatası <span> Lütfen Yeniden Yükleyin</span> </h1>
            }
        </>
    );
}

export default HomePages