import { Component } from "react";
export declare const inviteLink = "https://discord.com/oauth2/authorize?client_id=748971236276699247&permissions=8&scope=bot";
export default class DiscordInvite extends Component<Props, APIResponse | null> {
    static defaultProps: {
        palette: string;
    };
    __mounted: boolean;
    constructor(props: Props);
    fetchState(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
