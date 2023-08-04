import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import styles from "./Image.module.css"


const CityCards = ({tour}) => {
    return (
        <>
                <Grid item xs={2.2}>
                    <article className={styles.article}>
                        <img
                            src={tour.image}
                            alt="image"
                            className={styles.img}
                        />
                        <h1 className={styles.headerR}>
                            <Typography
                                variant="body2"
                                component="p"
                                fontWeight="bold"
                            >
                                {tour.name}
                            </Typography>
                        </h1>
                        <h1 className={styles.headerL}>
                            <Typography
                                variant="body2"
                                component="p"
                                fontWeight="bold"
                                marginRight={9}
                            >
                                ۲۵ اقامتگاه
                            </Typography>
                        </h1>
                    </article>
                </Grid>
        </>
    )
};

export default CityCards;