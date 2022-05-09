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

export default function StoragePreview() {
    return (
        <ImageList>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">STORAGE</ListSubheader>
            </ImageListItem>
            {storage.map((item) => (
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

const storage = [
    {
        id: 1,
        name: 'XPG',
        description: "Gammix S50",
        imageUrl: storage_1
    },
    {
        id: 2,
        name: 'Corsair Force',
        description: "Series MP600",
        imageUrl: storage_2
    },
    {
        id: 3,
        name: 'Samsung 970',
        description: "EVO Plus",
        imageUrl: storage_3
    },
    {
        id: 4,
        name: 'WD Purple',
        description: "Surveillance 3.5",
        imageUrl: storage_4
    },
    {
        id: 5,
        name: 'Seagate',
        description: "BarraCuda Pro",
        imageUrl: storage_5
    }
]
