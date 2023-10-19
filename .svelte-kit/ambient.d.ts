
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const PATH: string;
	export const INVOCATION_ID: string;
	export const XAUTHORITY: string;
	export const HISTCONTROL: string;
	export const XMODIFIERS: string;
	export const GDMSESSION: string;
	export const XDG_DATA_DIRS: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const XDG_ACTIVATION_TOKEN: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const JOURNAL_STREAM: string;
	export const MAIL: string;
	export const COLORTERM: string;
	export const USERNAME: string;
	export const SESSION_MANAGER: string;
	export const LOGNAME: string;
	export const MANAGERPID: string;
	export const PWD: string;
	export const GJS_DEBUG_TOPICS: string;
	export const LESSOPEN: string;
	export const SHELL: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const STEAM_FRAME_FORCE_CLOSE: string;
	export const DEBUGINFOD_URLS: string;
	export const NODE_ENV: string;
	export const SYSTEMD_EXEC_PID: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const SHLVL: string;
	export const FORCE_COLOR: string;
	export const QT_IM_MODULE: string;
	export const HISTSIZE: string;
	export const LANG: string;
	export const DEBUG_COLORS: string;
	export const MOZ_GMP_PATH: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_config_color: string;
	export const DISPLAY: string;
	export const MOCHA_COLORS: string;
	export const WAYLAND_DISPLAY: string;
	export const XDG_SESSION_CLASS: string;
	export const GDM_LANG: string;
	export const DESKTOP_SESSION: string;
	export const USER: string;
	export const XDG_MENU_PREFIX: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const SSH_AUTH_SOCK: string;
	export const SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
	export const EDITOR: string;
	export const HOSTNAME: string;
	export const XDG_RUNTIME_DIR: string;
	export const HOME: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		PATH: string;
		INVOCATION_ID: string;
		XAUTHORITY: string;
		HISTCONTROL: string;
		XMODIFIERS: string;
		GDMSESSION: string;
		XDG_DATA_DIRS: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		XDG_ACTIVATION_TOKEN: string;
		XDG_CURRENT_DESKTOP: string;
		JOURNAL_STREAM: string;
		MAIL: string;
		COLORTERM: string;
		USERNAME: string;
		SESSION_MANAGER: string;
		LOGNAME: string;
		MANAGERPID: string;
		PWD: string;
		GJS_DEBUG_TOPICS: string;
		LESSOPEN: string;
		SHELL: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		STEAM_FRAME_FORCE_CLOSE: string;
		DEBUGINFOD_URLS: string;
		NODE_ENV: string;
		SYSTEMD_EXEC_PID: string;
		GNOME_SETUP_DISPLAY: string;
		XDG_SESSION_DESKTOP: string;
		SHLVL: string;
		FORCE_COLOR: string;
		QT_IM_MODULE: string;
		HISTSIZE: string;
		LANG: string;
		DEBUG_COLORS: string;
		MOZ_GMP_PATH: string;
		XDG_SESSION_TYPE: string;
		npm_config_color: string;
		DISPLAY: string;
		MOCHA_COLORS: string;
		WAYLAND_DISPLAY: string;
		XDG_SESSION_CLASS: string;
		GDM_LANG: string;
		DESKTOP_SESSION: string;
		USER: string;
		XDG_MENU_PREFIX: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		GJS_DEBUG_OUTPUT: string;
		SSH_AUTH_SOCK: string;
		SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
		EDITOR: string;
		HOSTNAME: string;
		XDG_RUNTIME_DIR: string;
		HOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
