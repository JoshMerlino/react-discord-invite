"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteLink = void 0;
const react_1 = __importStar(require("react"));
const styles_1 = require("./styles");
exports.inviteLink = "https://discord.com/oauth2/authorize?client_id=748971236276699247&permissions=8&scope=bot";
class DiscordInvite extends react_1.Component {
    constructor(props) {
        super(props);
        this.__mounted = false;
        this.state = null;
    }
    fetchState() {
        const { guild } = this.props;
        fetch(`https://api.joshmerlino.me/v2/discord-invite-react/${guild}`)
            .then(resp => resp.json())
            .then(newState => this.setState(newState))
            .finally(() => {
            if (this.__mounted) {
                setTimeout(() => this.fetchState(), 5000);
            }
        });
    }
    componentDidMount() {
        this.__mounted = true;
        this.fetchState();
    }
    componentWillUnmount() {
        this.__mounted = false;
    }
    render() {
        const { state, props } = this;
        const { palette } = props;
        const style = (0, styles_1.styles)({ palette });
        const scheme = (0, styles_1.colors)(palette);
        if (state === null) {
            return (react_1.default.createElement("div", { className: "DiscordInvite-root", style: style.root },
                react_1.default.createElement(styles_1.CStyleSheet, { scheme: scheme }),
                react_1.default.createElement("p", { style: { visibility: "hidden" } }, "loading...")));
        }
        if (state.hasOwnProperty("error")) {
            console.error(state.error, `Invite Josh O' Bot: ${exports.inviteLink}`);
            return (react_1.default.createElement("div", { className: "DiscordInvite-root", style: style.root },
                react_1.default.createElement(styles_1.CStyleSheet, { scheme: scheme }),
                react_1.default.createElement("h5", { className: "DiscordInvite-title", style: style.title }, "You received an invite, but..."),
                react_1.default.createElement("div", { className: "DiscordInvite-body", style: style.body },
                    react_1.default.createElement("div", { className: "DiscordInvite-serverIcon", style: { ...style.icon, backgroundImage: `url(https://discord.com/assets/${palette === "dark" ? "e0c782560fd96acd7f01fda1f8c6ff24" : "b5d0fabb4afdf0666f3785f8c1d3beff"}.svg)` } }),
                    react_1.default.createElement("div", { className: "DiscordInvite-content" },
                        react_1.default.createElement("h3", { className: "DiscordInvite-serverName DiscordInvite-href", style: { ...style.name, ...style.error } }, "Invalid Invite"),
                        react_1.default.createElement("strong", { className: "DiscordInvite-memberCount", style: style.memberCount }, "Metrics Unavailable")),
                    react_1.default.createElement("a", { className: "DiscordInvite-joinLink", target: "_blank", style: { ...style.joinLink, ...style.blurple }, rel: "noreferrer" }, "Add our metrics bot"))));
        }
        return (react_1.default.createElement("div", { className: "DiscordInvite-root", style: style.root },
            react_1.default.createElement(styles_1.CStyleSheet, { scheme: scheme }),
            react_1.default.createElement("h5", { className: "DiscordInvite-title", style: style.title }, "You've been invited to join a server"),
            react_1.default.createElement("div", { className: "DiscordInvite-body", style: style.body },
                react_1.default.createElement("div", { className: "DiscordInvite-serverIcon", style: { ...style.icon, backgroundImage: `url(${state.iconURL})` } }),
                react_1.default.createElement("div", { className: "DiscordInvite-content" },
                    react_1.default.createElement("h3", { className: "DiscordInvite-serverName DiscordInvite-href", style: style.name }, state.name),
                    react_1.default.createElement("strong", { className: "DiscordInvite-memberCount", style: style.memberCount },
                        react_1.default.createElement("span", { className: "DiscordInvite-badge", style: style.memberCountDisplay },
                            state.memberOnline,
                            " Online"),
                        react_1.default.createElement("span", { className: "DiscordInvite-badge", style: style.memberCountDisplay },
                            state.memberCount,
                            " Members"))),
                react_1.default.createElement("a", { className: "DiscordInvite-joinLink", href: `https://discord.gg/${state.inviteCodes[0]}`, target: "_blank", style: style.joinLink, rel: "noreferrer" }, "Join"))));
    }
}
exports.default = DiscordInvite;
DiscordInvite.defaultProps = {
    palette: "dark"
};
//# sourceMappingURL=index.js.map