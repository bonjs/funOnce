/**
 * 多次执行一个函数时，只执行最后一次的
 */
var funOnce = function () {
	var timer, isExeced;
	return {
		add : function (f) {
			isExeced || clearTimeout(timer);
			isExeced = false;
			timer = setTimeout(function () {
				f.call();
				isExeced = true;
			});
		}
	};
}();
