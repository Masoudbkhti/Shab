'use client'
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import styles from "./Image.module.css"


const CityCards = ({image,name,number}) => {

    return (
        <>
                <Grid item >
                    <article className={styles.article}>
                        <img
                            src={image}
                            alt={name}
                            className={styles.image}
                        />
                        <h1 className={styles.headerR}>
                            <Typography
                                variant="body2"
                                component="p"
                                fontWeight="bold"
                            >
                                {name}
                            </Typography>
                        </h1>
                        <h1 className={styles.headerL}>
                            <Typography
                                variant="body2"
                                component="p"
                                fontWeight="bold"
                                marginRight={9}
                            >
                                {number} اقامتگاه
                            </Typography>
                        </h1>
                    </article>
                </Grid>
        </>
    )
};

export default CityCards;