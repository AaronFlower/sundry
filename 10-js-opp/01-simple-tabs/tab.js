function Tab(rootSelector, navItemSelector, panelItemSelector, eventType)
{
	if (!this instanceof Tab) { // 如果在实例化的时候忘记写 new 了。
		return new Tab(rootSelector, navItemSelector, panelItemSelector, eventType)
	}

	this.tab = document.getElementById(rootSelector)
	this.navItems = this.tab.querySelectorAll(navItemSelector)
	this.panelItems = this.tab.querySelectorAll(panelItemSelector)

	/**
	 * 为 tab 切换添加切换事件。
	 */
	let _self = this
	this.onTabEvent = function (event) {
		_self.handle.apply(_self, [this, event])
	}

	this.navItems.forEach((el) => {
		el.addEventListener(eventType, this.onTabEvent)
	})
}

Tab.prototype.handle = function (el, event) {
	this.navItems.forEach((el) => {
		el.classList.remove('active')
	})
	this.panelItems.forEach((el) => {
		el.classList.remove('active')
	})

	el.classList.add('active')
	this.navItems.forEach((_, index) => {
		if (_ == el) {
			this.panelItems[index].classList.add('active')
		}
	})
}