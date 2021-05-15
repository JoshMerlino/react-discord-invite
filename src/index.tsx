/* eslint no-use-before-define: off */
/* eslint no-undef: off */

import React, { Component } from "react";
import { styles, colors, CStyleSheet } from "./styles";
import { Props, State } from "./types";

export default class DiscordInvite extends Component<Props, State | null> {

	// Initialize component
	constructor(props: Props) {
		super(props);
		this.state = null;
	}

	// Fetch state from API
	fetchState(): void {

		const { guild } = this.props;

		fetch(`https://joshm.us.to/api/joshobot/v1/guild?guild=${guild}`)
			.then(resp => resp.json())
			.then(newState => this.setState(newState));

	}

	// On component mount
	componentDidMount(): void {
		this.fetchState();
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
			return <div className="DiscordInvite-root" style={ style.root }></div>;
		}

		// If there was some type of error
		if (state.success === false) {
			console.error(state.error, "Invite Josh O' Bot: https://discord.com/oauth2/authorize?client_id=748971236276699247&permissions=8&scope=bot");
			return (
				<div className="DiscordInvite-root" style={ style.root }>
					<a href="https://discord.com/oauth2/authorize?client_id=748971236276699247&permissions=8&scope=bot" target="_blank" rel="noreferrer">Invite Josh O&apos; Bot</a>
				</div>
			);
		}

		return (
			<>

				<div className="DiscordInvite-root" style={ style.root }>

					<CStyleSheet scheme={scheme}/>

					<h5 className="DiscordInvite-title" style={ style.title }>You received an invite to a server</h5>
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

			</>
		);

	}
}
