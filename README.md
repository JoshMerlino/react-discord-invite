# react-discord-invite
### Checks
* [![Build](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/build.yml/badge.svg)](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/build.yml)
* [![Code Style Analysis](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/code-style-analysis.yml/badge.svg)](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/code-style-analysis.yml)
* [![Test CI](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/test-ci.yml/badge.svg)](https://github.com/JoshMerlino/react-discord-invite/actions/workflows/test-ci.yml)

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

### Screenshots
![Desktop Dark](https://raw.githubusercontent.com/JoshMerlino/react-discord-invite/master/images/desktop.dark.png)
![Desktop Light](https://raw.githubusercontent.com/JoshMerlino/react-discord-invite/master/images/desktop.light.png)

---
![Mobile Dark](https://raw.githubusercontent.com/JoshMerlino/react-discord-invite/master/images/mobile.dark.png)
![Mobile Light](https://raw.githubusercontent.com/JoshMerlino/react-discord-invite/master/images/mobile.light.png)