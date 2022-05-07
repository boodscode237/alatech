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
    power_supplies_4,
    power_supplies_5, processor_1, processor_2, processor_3, processor_4, processor_5, processor_6,
    RadeonRed,
    RadeonRx,
    Shine,
    Soft, storage_1, storage_2, storage_3, storage_4, storage_5,
    Wave
} from "../data/data";

const SHOP_DATA = [
    {
        id: 1,
        title: 'machines',
        routeName: 'machines',
        items: [
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
    },
    {
        id: 2,
        title: 'graphic cards',
        routeName: 'graphic_cards',
        items: [
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
    },
    {
        id: 3,
        title: 'motherboards',
        routeName: 'motherboards',
        items: [
            {
                id: 1,
                name: 'X299X Aorus',
                description: "Xtreme Waterforce",
                imageUrl: motherboard_1
            },
            {
                id: 2,
                name: 'X570 AQUA',
                description: "AQUA",
                imageUrl: motherboard_2
            },
            {
                id: 3,
                name: 'MEG X570 Godlike',
                description: "Godlike",
                imageUrl: motherboard_3
            },
            {
                id: 4,
                name: 'X570 Aorus Xtreme',
                description: "Xtreme",
                imageUrl: motherboard_4
            },
            {
                id: 5,
                name: 'Z390 Aorus Xtreme',
                description: "Xtreme",
                imageUrl: motherboard_5
            },
            {
                id: 6,
                name: 'X399 Aorus Xtreme',
                description: "Gaming",
                imageUrl: motherboard_6
            },
            {
                id: 7,
                name: 'ROG Strix TRX40-E Gaming',
                description: "Gaming",
                imageUrl: motherboard_7
            },
            {
                id: 8,
                name: 'GA-H170-GAMING 3',
                description: "Gaming",
                imageUrl: motherboard_8
            },
            {
                id: 9,
                name: 'GA-H170M-D3H',
                description: "Gaming",
                imageUrl: motherboard_9
            }
        ]
    },
    {
        id: 4,
        title: 'power supplies',
        routeName: 'power_supplies',
        items: [
            {
                id: 1,
                name: 'AX1200i',
                description: "AX1200i",
                imageUrl: power_supplies_1
            },
            {
                id: 2,
                name: 'AX1000',
                description: "AX1000",
                imageUrl: power_supplies_2
            },
            {
                id: 3,
                name: 'HX750i',
                description: "Godlike",
                imageUrl: power_supplies_3
            },
            {
                id: 4,
                name: 'RMx',
                description: "RMx",
                imageUrl: power_supplies_4
            },
            {
                id: 5,
                name: 'SF Series 450W',
                description: "Xtreme",
                imageUrl: power_supplies_5
            }
        ]
    },
    {
        id: 5,
        title: 'processors',
        routeName: 'processors',
        items: [
            {
                id: 1,
                name: 'i9-9980XE Skylake',
                description: "i9-9980XE Skylake",
                imageUrl: processor_1
            },
            {
                id: 2,
                name: 'Ryzen Threadripper 2990WX',
                description: "Threadripper",
                imageUrl: processor_2
            },
            {
                id: 3,
                name: 'Ryzen Threadripper 3960X',
                description: "Threadripper",
                imageUrl: processor_3
            },
            {
                id: 4,
                name: 'i9-7920X Skylake',
                description: "Skylake",
                imageUrl: processor_4
            },
            {
                id: 5,
                name: 'i9-10920X',
                description: "Cascade Lake",
                imageUrl: processor_5
            },
            {
                id: 6,
                name: 'i9-9900KS',
                description: "Coffee Lake Refresh",
                imageUrl: processor_6
            }
        ]
    },
    {
        id: 6,
        title: 'storage',
        routeName: 'storage',
        items: [
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
    }
]

export default SHOP_DATA