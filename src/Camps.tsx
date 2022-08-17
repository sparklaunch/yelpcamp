import { createContext } from "react";
import Camp from "./utils/Camp";

let camps: Camp[] = [
    {
        name: "Mount Ulap",
        description:
            "One of the most famous hikes in Benguet is Mt. Ulap in Itogon.",
        image: "MountUlap.png"
    },
    {
        name: "Calaguas Islands",
        description:
            "A paradise of islands that can rival the white sand beauty of Boracay.",
        image: "CalaguasIsland.jpg"
    },
    {
        name: "Onay Beach",
        description:
            "This is one of the best beach camping sites, beautiful and pristine.",
        image: "OnayBeach.jpg"
    },
    {
        name: "Seven Sisters Waterfall",
        description:
            "The Seven Sisters is the 39th tallest waterfall in Norway.",
        image: "SevenSistersWaterfall.jpg"
    },
    {
        name: "Latik Riverside",
        description:
            "Philippines is one of the most dazzling countries in all of Asia.",
        image: "LatikRiverside.jpg"
    },
    {
        name: "Buloy Springs",
        description:
            "This is one of the best beach camping sites, beautiful and pristine.",
        image: "BuloySprings.jpg"
    }
];

const CampContext = createContext<Camp[]>([]);

export { CampContext, camps };
