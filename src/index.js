const GROUP_PREFIX = 'main_'
const GROUP_BASE_PATH = `./html/`
const GROUP_NAME = 'group'
const GROUP_CHILD_NAME = 'group_home'

let app = new Vue({
	el: '#wrap',
	data() {
		return {
			titles: ['首页', '测试 ', '测试', '我'],
			framesTitle: ['home', 'test1', 'test2', 'mine'],
			framesIndex: 0
		}
	},
	methods: {
		init() {
			this.installGroup()
		},
		/**
		 * [打开窗口组]
		 * @return {[type]} [description]
		 */
		installGroup() {
			const y = this.$els.header.offsetHeight
			const h = this.$els.main.offsetHeight

			let frames = this.framesTitle.map((item) => {
				return {
					name: `${GROUP_PREFIX}${item}`,
					url: `${GROUP_BASE_PATH}${item}/index.html`
				}
			})

			let opts = {
				name: GROUP_NAME, // 主窗口组名称
				scrollEnabled: false,
				preload: 3,
				rect: {
					x: 0, 
					y: y,
					w: api.winWidth, 
					h: h
				},
				index: 0,
				frames: frames
			}

			api.openFrameGroup(opts, (ret, err) => {
				// 预留空
			});

		},
		switchBtn(index) {
			this.framesIndex = index

			// 根据Index显示页面
			api.setFrameGroupIndex({
				name: GROUP_NAME,
				index: index
			});
		}
	}
})

window.apiready = () => {
	$api.fixStatusBar( app.$els.header );
    api.setStatusBarStyle({
		style: 'dark',
		color: '#F8F8FA'
	});
	app.init()
}

