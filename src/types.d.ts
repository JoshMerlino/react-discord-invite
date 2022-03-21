interface Props {

    /*
     * The ID or invite code of the server.
     */
    guild: string;

    /*
     * The color theme of the component.
     */
    palette?: "light" | "dark";

    /*
     * Weather or not the component should skip rendering a shadow.
     */
    flat?: boolean;

}

interface ServerStat {
    id: string;
    name: string;
    owner: string;
    ownerId: string;
    verified: boolean;
    memberCount: number | string;
    memberOnline: number | string;
    bannerURL: string | null;
    iconURL: string | null;
    inviteCodes: string[];
}
