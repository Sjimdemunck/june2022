import { useContext } from "react";
import  UserContext from "../providers/UserProvider";
import { useQuery } from 'react-query';
import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Title } from "./Login";


export interface ICard {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}

const CardsWrapper = styled(Grid)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Card = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
    margin: 10px;
    `;

    export const Image = styled.img`
        width: 220px;
        height: 220px;
    `;

    async function fetchCards() {
        const response = await fetch('https://picsum.photos/v2/list?limit=16');

        return response.json();
    }

const Home = () => {
    const { user } = useContext(UserContext);
    const { data, status } = useQuery('card', fetchCards);


    if (status === 'loading') {
        return <p>Loading..</p>
    }

    if (status === 'error') {
        return <p>Error!</p>
    }

    return (
        <>
        <Title>Cards</Title>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <CardsWrapper container>
                    {data.map((card: ICard) => (
                        <Card key={card.id}>
                            <Image src={card.download_url} alt={card.author}  />
                        </Card>
                    ))}
                </CardsWrapper>
            </Grid>
        </>
    )
}

export default Home;