export default {
	list2map(list, key) {
		let map = {};
		list.forEach(item => {
			map[item[key]] = item;
		});
		return map;
	},
	simpList(list, key) {
		let simpList = [];
		list.forEach(item => {
			simpList.push(item[key]);
		})
		return simpList;
	},
	sortBy(key, desc) {
		// key:  用于排序的数组的key值
		// desc： 布尔值，为true是升序排序，false是降序排序
		return function(a, b) {
			let value1 = a[key];
			let value2 = b[key];
			if (desc == true) {
				// 升序排列
				return value1 - value2;
			} else {
				// 降序排列
				return value2 - value1;
			}
		};
	}
}
