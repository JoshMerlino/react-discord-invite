import { useEffect, useState } from "react";
import classnames from "classnames";
import "./index.less";

export default function DiscordInvite({ guild, palette = "dark", flat = false }: Props) {

	const initialState: ServerStat = {
		id: "",
		name: "Loading...",
		owner: "",
		ownerId: "",
		verified: false,
		memberCount: "∅",
		memberOnline: "∅",
		bannerURL: null,
		iconURL: "https://steamuserimages-a.akamaihd.net/ugc/961973556167374789/672A76928C54C3E57E081E0EB9E9A752B18B1778/",
		inviteCodes: []
	};

	const [ state, setState ] = useState<ServerStat & { error: boolean, offline: boolean }>({
		offline: false,
		error: false,
		...initialState
	});

	function fetchState() {
		fetch(`https://api.joshmerlino.me/v2/discord-invite-react/${guild}`)
			.then(r => r.json())
			.then(setState)
			.catch(() => setState({ ...state, offline: true }));
	}

	useEffect(function() {
		const iv = setInterval(fetchState, 5000);
		fetchState();
		return () => clearInterval(iv);
	}, []);

	function invite() {
		window.open("https://discord.com/api/oauth2/authorize?client_id=955128562455838791&permissions=8&scope=bot");
	}

	if (state && "error" in state && state.error) return (
		<div className={ classnames("ReactDiscordInvite--root", `palette-${palette}`, { flat }) }>
			<h5 className="ReactDiscordInvite--title !text-red-500">You've been invited to join a server</h5>
			<div className="ReactDiscordInvite--datalayer">
				<img className="ReactDiscordInvite--servericon" src={initialState.iconURL!}/>
				<div className="ReactDiscordInvite--textlayer">
					<div className="ReactDiscordInvite--servername">Not reporting metrics</div>
					<strong className="ReactDiscordInvite--membercount">Invite our bot to get started</strong>
				</div>
				<a className="ReactDiscordInvite--joinlink ReactDiscordInvite--botinvite" onClick={ invite }>Invite Bot</a>
			</div>
		</div>
	);

	return (
		<div className={ [ "ReactDiscordInvite--root", `palette-${palette}` ].join(" ") }>
			<h5 className="ReactDiscordInvite--title">You've been invited to join a server</h5>
			<div className="ReactDiscordInvite--datalayer">
				<img className="ReactDiscordInvite--servericon" src={state.iconURL!}/>
				<div className="ReactDiscordInvite--textlayer">
					<div className="ReactDiscordInvite--servername">{ state.name }</div>
					<strong className="ReactDiscordInvite--membercount">
						<span>{state.memberOnline} Online</span>
						<span>{state.memberCount} Members</span>
					</strong>
				</div>
				{ state.inviteCodes.length > 0 && <a className="ReactDiscordInvite--joinlink" href={state.id === "" ? undefined : `//discord.gg/${state.inviteCodes[0]}`}>Join</a> }
			</div>
		</div>
	);
}
