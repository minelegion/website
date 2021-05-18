import Roles, { RoleType } from "@lib/client/api/role";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";

const RoleContext = createContext<{
    role?: RoleType;
    setRole: Dispatch<SetStateAction<RoleType>>;
}>(null);

export const useRole = () => {
    const { role } = useContext(RoleContext);

    return role;
};

const RoleProvider = ({ children }: PropsWithChildren<{}>) => {
    const [role, setRole] = useState<RoleType>();

    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        setRole(await Roles.get());
    };

    return (
        <RoleContext.Provider value={{ role, setRole }}>
            {children}
        </RoleContext.Provider>
    );
};

export default RoleProvider;