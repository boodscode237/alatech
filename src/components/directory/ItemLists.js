import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import iconMachine from "./images/32.png";
import iconCards from "./images/33.png";
import iconMotherBoard from "./images/3.png";
import iconProcessor from "./images/18.png";
import iconRam from "./images/14.png";
import iconStorage from "./images/41.png";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import {deepPurple} from "@mui/material/colors";

const sections = [
    {
        title: 'machines',
        imageUrl: iconMachine,
        size: 'large',
        id: 1,
        linkUrl: 'machines',
    },
    {
        title: 'cards',
        imageUrl: iconCards,
        id: 2,
        linkUrl: 'cards',
    },
    {
        title: 'motherboards',
        imageUrl: iconMotherBoard,
        id: 3,
        linkUrl: 'motherboards',
    },
    {
        title: 'processors',
        imageUrl: iconProcessor,
        id: 4,
        linkUrl: 'processors',
    },
    {
        title: 'ram',
        imageUrl: iconRam,
        id: 5,
        linkUrl: 'ram',
    },
    {
        title: 'storage',
        imageUrl: iconStorage,
        size: 'large',
        id: 6,
        linkUrl: 'storage',
    }
]

function Products() {
    return (
        <ImageList gap={10}>
            <ImageListItem key="Subheader" cols={1}>
                <ListSubheader component="div">Products</ListSubheader>
            </ImageListItem>
            {sections.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                        alt={item.title.toUpperCase()}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title.toUpperCase()}
                        subtitle={item.linkUrl}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <Typography><Link exact to={item.linkUrl}>SHOP NOW</Link></Typography>
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


export default Products