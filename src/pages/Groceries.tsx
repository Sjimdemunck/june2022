import styled from "@emotion/styled";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableRow, TextField } from "@mui/material"
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../providers/UserProvider";
import { Title } from "./Login";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TableHead from '@mui/material/TableHead';


export interface IItem {
    name: string,
    price: number,
    initialQuantity: number,
    id: string,
    shop: string
}

type Items = IItem[];

const InputWrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: auto;
    margin-top: 100px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
`;

const ItemList = styled(Paper)`
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-top: 30px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
`;

const ItemTable = styled(Table)`
`



const schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    initialQuantity: yup.number().required(),
    shop: yup.string().required()
})

export const Groceries = (authorized: any) => {
    const { user } = useContext(UserContext);
    const {register, handleSubmit, formState: { errors } } = useForm<IItem>({
        resolver: yupResolver(schema)
    }
    );
    const [items, setItems] = useState<Items>([{
        name: "Bread",
        price: 1.99,
        initialQuantity: 0,
        id: "1",
        shop: "AH"
    }]); 

    if (!authorized) {
        return <div style={{color: "red"}}>You are not authorized</div>;
    }

    const onSubmit = (item:any) => {
        const newItem: IItem = {
            name: item.name,
            price: item.price,
            initialQuantity: item.initialQuantity,
            id: item.id,
            shop: item.shop
        }
        setItems([...items, newItem]);
    }

    return (
        <>
            <Title>Shopping List</Title>
            <Grid container>
                <Grid item xs={12}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ItemList>
                        <ItemTable>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Initial Quantity</TableCell>
                                        <TableCell>Shop</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {items.map((item:any, index: any) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>{item.initialQuantity}</TableCell>
                                            <TableCell>{item.shop}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </ItemTable>
                    </ItemList>
                        <InputWrapper>
                        <Title>Add Item</Title>
                            <TextField
                                label="Name"
                                type="text"
                                variant="outlined"
                                margin="normal"
                                helperText={errors?.name?.message}
                                {...register("name", { required: true})} 
                                fullWidth
                                required
                                autoFocus
                            />
                            <TextField
                                label="Item price"
                                type="number"
                                variant="outlined"
                                margin="normal"
                                helperText={errors?.price?.message}
                                {...register("price", { required: true})} 
                                fullWidth
                                required
                            />
                            <TextField
                                label="Item quantity"
                                type="number"
                                variant="outlined"
                                margin="normal"
                                helperText={errors?.initialQuantity?.message}
                                {...register("initialQuantity", { required: true})} 
                                fullWidth
                                required
                            />
                            <TextField
                                label="Item shop"
                                type="text"
                                variant="outlined"
                                margin="normal"
                                helperText={errors?.shop?.message}
                                {...register("shop", { required: true})} 
                                fullWidth
                                required
                            />  
                            <Button 
                                type="submit"
                                variant='contained'
                                fullWidth style={{marginTop: "15px"}} 
                            >
                                Add Item
                            </Button>
                        </InputWrapper>
                    </form >
                </Grid>
            </Grid>
        </>
    )
}
