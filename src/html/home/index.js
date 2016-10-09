const frames = [
	{
		name: 'home_a',
		url: './pages/a/index.html',
		bounces: false
	},
	{
		name: 'home_b',
		url: './pages/b/index.html'
	}
]

const GROUP_NAME = 'group_home'
const FRAME_HEADER_NAME = `${GROUP_NAME}_header`

function initGroup() {
	let opts = {
		name: GROUP_NAME, // 主窗口组名称
		scrollEnabled: true,
		preload: 1,
		rect: {
			x: 0, 
			y: api.pageParam.y, 
			w: api.winWidth, 
			h: api.pageParam.h
		},
		index: 0,
		frames: frames
	}

	api.openFrameGroup(opts, (ret, err) => {

	});
}

function switchPanel(index) {
	api.setFrameGroupIndex({
		name: GROUP_NAME,
		index: index,
		scroll: true
	})
}

window.switchPanel = switchPanel

window.apiready = () => {
	initGroup()
}