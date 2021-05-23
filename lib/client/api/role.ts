import get from "../fetch/get";

type RoleData = {
    name: string;
    color: {
        main: string;
        contrastText: string;
    };
};

export const roles = {
    tulaj: {
        name: "Tulajdonos",
        color: {
            main: "#AA0000",
            contrastText: "#FFFFFF",
        },
    },
    admin: {
        name: "Adminisztrátor",
        color: {
            main: "#FF5555",
            contrastText: "#FFFFFF",
        }
    },
    moderator: {
        name: "Moderátor",
        color: {
            main: "#5555FF",
            contrastText: "#FFFFFF",
        },
    },
    nemes: {
        name: "Nemes",
        color: {
            main: "#FFFF55",
            contrastText: "#000000",
        },
    },
    lovag: {
        name: "Lovag",
        color: {
            main: "#00AAAA",
            contrastText: "#FFFFFF",
        },
    },
    default: {
        name: "Játékos",
        color: {
            main: "#00AA00",
            contrastText: "#FFFFFF",
        },
    },
    test: {
        name: "Teszt rang",
        color: {
            main: "#FF0000",
            contrastText: "#FFFFFF",
        },
    },
};

export type RoleType = keyof typeof roles;

export default class Roles {
    public static async get(): Promise<RoleType> {
        const resp = await get("/roles/get");

        return resp.data;
    }
} 