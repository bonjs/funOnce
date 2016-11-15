/**
 * ���ִ��һ������ʱ��ִֻ�����һ�ε�
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
