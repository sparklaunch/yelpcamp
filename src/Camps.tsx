import { createContext } from "react";
import Camp from "./utils/Camp";

let camps: Camp[] = [
    {
        id: 0,
        name: "Mount Ulap",
        description:
            "One of the most famous hikes in Benguet is Mt. Ulap in Itogon.",
        image: "MountUlap.png"
    },
    {
        id: 1,
        name: "Calaguas Islands",
        description:
            "A paradise of islands that can rival the white sand beauty of Boracay.",
        image: "CalaguasIslands.jpg"
    },
    {
        id: 2,
        name: "Onay Beach",
        description:
            "This is one of the best beach camping sites, beautiful and pristine.",
        image: "OnayBeach.jpg"
    },
    {
        id: 3,
        name: "Seven Sisters Waterfall",
        description:
            "The Seven Sisters is the 39th tallest waterfall in Norway.",
        image: "SevenSistersWaterfall.jpg"
    },
    {
        id: 4,
        name: "Latik Riverside",
        description:
            "Philippines is one of the most dazzling countries in all of Asia.",
        image: "LatikRiverside.jpg"
    },
    {
        id: 5,
        name: "Buloy Springs",
        description:
            "This is one of the best beach camping sites, beautiful and pristine.",
        image: "BuloySprings.jpg"
    }
];

const CampContext = createContext<Camp[]>([]);

export { CampContext, camps };
