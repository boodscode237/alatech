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

export default function MachinesPreview() {
    return (
        <ImageList>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">Machines</ListSubheader>
            </ImageListItem>
            {machines.map((item) => (
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

const machines = [
    {
        id: 1,
        name: 'Infinity',
        description: "The highest and best you could get from a gamer machine.",
        imageUrl: Infinity
    },
    {
        id: 2,
        name: 'Shine',
        description: "Light gives a huge power to someone.",
        imageUrl: Shine
    },
    {
        id: 3,
        name: 'Wave',
        description: "Light gives a huge power to someone.",
        imageUrl: Wave
    },
    {
        id: 4,
        name: 'Wave',
        description: "The sequences and perfection of waves bring this machine all the power electrons carry.",
        imageUrl: Wave
    },
    {
        id: 5,
        name: 'Cerberus',
        description: "The unexpected will bring you a lot more than you expected.",
        imageUrl: Cerberus
    },
    {
        id: 6,
        name: 'Iceberg',
        description: "An ice-solid experience for your gaming days.",
        imageUrl: Iceberg
    },
    {
        id: 7,
        name: 'Soft',
        description: "The softer version that knows how to play hard.",
        imageUrl: Soft
    }
]