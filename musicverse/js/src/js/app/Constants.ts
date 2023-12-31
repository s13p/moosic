export enum Events {
	all = 'all',
	loadingManagerInited = 'loadingManagerInited',
	sceneInited = 'sceneInited',
	// preloaderAssetsLoaded = 'preloaderAssetsLoaded',
	runPreloader = 'runPreloader',
	soundsLoaded = 'soundsLoaded',
	modelsLoaded = 'modelsLoaded',
	texturesLoaded = 'texturesLoaded',
	materialsLoaded = 'materialsLoaded',
	allAssetsLoaded = 'allAssetsLoaded',
	startPreloader = 'startPreloader',
	playPreloaderMusic = 'playPreloaderMusic',
	prestart = 'prestart',
	start = 'start',
	playMainMusic = 'playMainMusic',

	toggleMute = 'toggleMute',
	sceneStarted = 'sceneStarted',
	playSound = 'playSound',
	toggleHeartbeat = 'toggleHeartbeat',
}

export enum States {
	waitPreloader,
	prestart,
	preloader,
	showIntro,
	about0,
	about1,
	about2,
	teaser,
	demo0,
	demo1,
	news,
}

export const StateKeys = [
	'waitPreloader',
	'prestart',
	'preloader',
	'showIntro',
	'about0',
	'about1',
	'about2',
	'teaser',
	'demo0',
	'demo1',
	'news',
]
