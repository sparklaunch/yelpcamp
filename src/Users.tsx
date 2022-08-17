import { createContext } from "react";
import User from "./utils/User";

let users: User[] = [
    {
        id: 0,
        name: "Andrew Mike"
    }
];

const UserContext = createContext<User[]>([]);

export { users, UserContext };
