# react-discord-invite
[![Test CI](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/test.yml/badge.svg)](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/test.yml)
[![CodeQL](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/codeql-analysis.yml)

A React component to invite users to a Discord server with an interactive widget.

## Using

**Note: *This component fetches data from the Josh O' Bot API. You MUST have [Josh O' Bot](https://discord.com/oauth2/authorize?client_id=748971236276699247&permissions=8&scope=bot) in your server for this to work.***

### Installing
```bash
npm install -D react-discord-invite
```

### Importing
```javascript
import DiscordInvite from "react-discord-invite";

function Component() {
	return (
		<DiscordInvite/>
	)
}
```

### Props
| Name | Default | Type | Description |
| - | - | - | - |
| palette | "dark" | "light" \| "dark" | Sets the color scheme of the component |
| guild | *required* | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Sets the ID or invite code of the guild. |

### Examples
```javascript
<DiscordInvite palette="light" guild="708050277957238784"/>
```
```javascript
<DiscordInvite palette="dark" guild="4FBnfPA"/>
```
```javascript
<DiscordInvite guild="4FBnfPA"/>
```

