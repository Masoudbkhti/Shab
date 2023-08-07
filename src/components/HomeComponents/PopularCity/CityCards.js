import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import styles from "./Image.module.css"


const CityCards = ({data}) => {
    return (
        <>
                <Grid item xs={2.2}>
                    <article className={styles.article}>
                        <img
                            src={data.image}
                            alt="image"
                            className={styles.image}
                        />
                        <h1 className={styles.headerR}>
                            <Typography
                                variant="body2"
                                component="p"
                                fontWeight="bold"
                            >
                                {data.name}
                            </Typography>
                        </h1>
                        <h1 className={styles.headerL}>
                            <Typography
                                variant="body2"
                                component="p"
                                fontWeight="bold"
                                marginRight={9}
                            >
                                {data.number} اقامتگاه
                            </Typography>
                        </h1>
                    </article>
                </Grid>
        </>
    )
};

export default CityCards;