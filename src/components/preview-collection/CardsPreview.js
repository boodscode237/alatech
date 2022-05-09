import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {
    Cerberus,
    GeForce,
    GeForceGTX1070,
    GeForceRTX,
    GeForceRTX2080,
    Iceberg,
    Infinity,
    motherboard_1,
    motherboard_2,
    motherboard_3,
    motherboard_4,
    motherboard_5,
    motherboard_6,
    motherboard_7,
    motherboard_8,
    motherboard_9,
    power_supplies_1,
    power_supplies_2,
    power_supplies_3,
    power_supplies_4, power_supplies_5, processor_1, processor_2, processor_3, processor_4, processor_5, processor_6,
    RadeonRed,
    RadeonRx,
    Shine,
    Soft, storage_1, storage_2, storage_3, storage_4, storage_5,
    Wave
} from "../../pages/data/data";

export default function CardsPreview() {
    return (
        <ImageList>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">CARDS</ListSubheader>
            </ImageListItem>
            {cards.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.name}
                        subtitle={item.description}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.name}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const cards =  [
    {
        id: 1,
        name: 'GeForce RTX 2070 ',
        description: "Super XC Ultra + Overclocked",
        imageUrl: GeForce
    },
    {
        id: 2,
        name: 'GeForce RTX 2080 ',
        description: "Super HOF 10th Anniversary Edition Black Teclab",
        imageUrl: GeForceRTX
    },
    {
        id: 3,
        name: 'GeForce RTX 2080',
        description: "Ti KINGPIN Gaming",
        imageUrl: GeForceRTX2080
    },
    {
        id: 4,
        name: 'Radeon Red',
        description: "Devil RX5700",
        imageUrl: RadeonRed
    },
    {
        id: 5,
        name: 'Radeon RX ',
        description: "5700 XT Nitro+",
        imageUrl: RadeonRx
    },
    {
        id: 6,
        name: 'GeForce GTX 1070',
        description: "Gaming ACX 3.0",
        imageUrl: GeForceGTX1070
    },
]