import get from "../fetch/get";

type RoleData = {
    name: string;
    discord?: string;
    color: {
        main: string;
        contrastText: string;
    };
};

export const roles = {
    tulaj: {
        name: "Tulajdonos",
        discord: "843571217129668619",
        color: {
            main: "#AA0000",
            contrastText: "#FFFFFF",
        },
    },
    admin: {
        name: "Adminisztrátor",
        discord: "843571293723033650",
        color: {
            main: "#FF5555",
            contrastText: "#FFFFFF",
        }
    },
    moderator: {
        name: "Moderátor",
        discord: "843571347430047814",
        color: {
            main: "#5555FF",
            contrastText: "#FFFFFF",
        },
    },
    legion: {
        name: "Legion",
        discord: "845766342261866517",
        color: {
            main: "#55ffff",
            contrastText: "#000000",
        }
    },
    nemes: {
        name: "Nemes",
        discord: "845766480426827817",
        color: {
            main: "#FFFF55",
            contrastText: "#000000",
        },
    },
    lovag: {
        name: "Lovag",
        discord: "845766584755945482",
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