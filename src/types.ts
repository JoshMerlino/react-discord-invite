export interface Props {
	palette: "light" | "dark";
	guild?: string;
}

export interface State {
    success: boolean;
	status?: string;
	error?: string;
    name: string;
    owner: string;
    verified: boolean;
    region: string,
    id: string;
    memberCount: number;
    memberOnline: number;
    bannerURL: null,
    iconURL: string;
    inviteCodes: string[];
}

export interface Palette {
	background: string;
	header: string;
	name: string;
	inactive: string;
	active: string;
}
