// 定义一个函数，用于动态加载 CDN 上的 JavaScript 文件
function loadScriptFromCDN(src, callback) {
	const script = document.createElement('script');
	script.src = src;
	script.async = true;
	script.onload = callback;
	script.onerror = function() {
		console.error(`Failed to load script from ${src}`);
	};
	document.head.appendChild(script);
}

// 插入更多文章模块到 .article-content-inner 容器的末尾
function insertReadMoreModule() {
	const container = document.querySelector('.article-content-inner');
	if (container) {
		const readmoreContainer = document.createElement('div');
		readmoreContainer.setAttribute('id', 'readmore_box_v4');
		container.appendChild(readmoreContainer);

		// 调用 nerdReadMoreBoxV4 方法插入内容
		if (typeof $.nerdReadMoreBoxV4 === 'function') {
			$.nerdReadMoreBoxV4({
				read_more_cta: '查看更多文章', // 设置按钮 CTA 文案
				article_readmore_status: 'site', // 仅用于标记，可以自定义
				addon_username: '' // 可选：设置用户名
			});
		} else {
			console.error('nerdReadMoreBoxV4 function is not available');
		}
	} else {
		console.error('.article-content-inner container not found');
	}
}

// 先检查 jQuery 是否加载；如果没有加载，先加载 jQuery
if (typeof jQuery === 'undefined') {
    console.log("jQuery is not loaded. Loading jQuery...");
    loadScriptFromCDN('https://code.jquery.com/jquery-3.6.0.min.js', () => {
        console.log("jQuery loaded. Now loading readmorevm.js...");
        loadScriptFromCDN('https://cdn.jsdelivr.net/gh/MakiDevelop/ReadMore@main/readmorevm.js', insertReadMoreModule);
    });
} else {
    // 如果 jQuery 已加载，直接加载 `readmorevm.js`
    console.log("jQuery is already loaded. Loading readmorevm.js...");
    loadScriptFromCDN('https://cdn.jsdelivr.net/gh/MakiDevelop/ReadMore@main/readmorevm.js', insertReadMoreModule);
}
