/* eslint no-use-before-define: off */
/* eslint no-undef: off */

import React, { Component } from "react";
import { styles, colors, CStyleSheet } from "./styles";

export const inviteLink = "https://discord.com/oauth2/authorize?client_id=748971236276699247&permissions=8&scope=bot";

export default class DiscordInvite extends Component<Props, APIResponse | null> {

	// Initialize default props
	static defaultProps = {
		palette: "dark"
	}

    autoFetch?: NodeJS.Timeout;

    // Initialize component
    constructor(props: Props) {

    	// Create component
    	super(props);

    	// Initialize state
    	this.state = null;

    }

    // Fetch state from API
    fetchState(): void {

    	// Get guild id from props
    	const { guild } = this.props;

    	// Make API request to my server
    	fetch(`https://joshm.us.to/api/joshobot/v1/guild?guild=${guild}`)
    		.then(resp => resp.json())
    		.then(newState => this.setState(newState));

    }

    // On component mount
    componentDidMount(): void {
    	this.fetchState();
    	this.autoFetch = setInterval(() => this.fetchState(), 1000);
    }

    componentWillUnmount(): void {
    	clearInterval(this.autoFetch!);
    }

    // Draw element
    render(): JSX.Element | null {

    	// Destructure
    	const { state, props } = this;

    	// Get style from palette
    	const { palette } = props;
    	const style = styles({ palette });
    	const scheme = colors(palette);

    	// If state is pending (awaiting API response)
    	if (state === null) {
    		return (
    			<div className="DiscordInvite-root" style={ style.root }>
    				<CStyleSheet scheme={scheme}/>
    				<p style={{ visibility: "hidden" }}>loading...</p>
    			</div>
    		);
    	}

    	// If there was some type of error
    	if (state.hasOwnProperty("error")) {
    		console.error(state.error, `Invite Josh O' Bot: ${inviteLink}`);
    		return (
    			<div className="DiscordInvite-root" style={ style.root }>
    				<CStyleSheet scheme={scheme}/>
    				<h5 className="DiscordInvite-title" style={ style.title }>You received an invite, but...</h5>
    				<div className="DiscordInvite-body" style={ style.body }>
    					<div className="DiscordInvite-serverIcon" style={{ ...style.icon, backgroundImage: `url(https://discord.com/assets/${ palette === "dark" ? "e0c782560fd96acd7f01fda1f8c6ff24" : "b5d0fabb4afdf0666f3785f8c1d3beff"}.svg)` }}/>
    					<div className="DiscordInvite-content">
    						<h3 className="DiscordInvite-serverName DiscordInvite-href" style={{ ...style.name, ...style.error }}>Invalid Invite</h3>
    						<strong className="DiscordInvite-memberCount" style={ style.memberCount }>
								Josh O&apos; Bot not found!
    						</strong>
    					</div>
    					<a className="DiscordInvite-joinLink" target="_blank" style={{ ...style.joinLink, ...style.blurple }} rel="noreferrer">Add Josh O&apos; Bot</a>
    				</div>
    			</div>
    		);
    	}

    	return (
    		<div className="DiscordInvite-root" style={ style.root }>
    			<CStyleSheet scheme={scheme}/>
    			<h5 className="DiscordInvite-title" style={ style.title }>You&apos;ve been invited to join a server</h5>
    			<div className="DiscordInvite-body" style={ style.body }>
    				<div className="DiscordInvite-serverIcon" style={{ ...style.icon, backgroundImage: `url(${ state.iconURL })` }}/>
    				<div className="DiscordInvite-content">
    					<h3 className="DiscordInvite-serverName DiscordInvite-href" style={ style.name }>{ state.name }</h3>
    					<strong className="DiscordInvite-memberCount" style={ style.memberCount }>
    						<span className="DiscordInvite-badge" style={ style.memberCountDisplay }>{state.memberOnline} Online</span>
                   			<span className="DiscordInvite-badge" style={ style.memberCountDisplay }>{state.memberCount} Members</span>
    					</strong>
    				</div>
    				<a className="DiscordInvite-joinLink" href={`https://discord.gg/${state.inviteCodes[0]}`} target="_blank" style={ style.joinLink } rel="noreferrer">Join</a>
    			</div>
    		</div>
    	);

    }
}
