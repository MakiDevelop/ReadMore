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

// 插入“查看更多模块”到 .article-content-inner 容器的末尾
function insertReadMoreModule() {
	const container = document.querySelector('.article-content-inner');
	if (container) {
		const readmoreContainer = document.createElement('div');
		readmoreContainer.setAttribute('id', 'readmore_box_v4');
		container.appendChild(readmoreContainer);

		// 调用 nerdReadMoreBoxV4 方法插入内容
		if (typeof $.nerdReadMoreBoxV4 === 'function') {
			$.nerdReadMoreBoxV4({
				read_more_cta: '查看更多文章', // 设置按钮 CTA 文案，可根据需要调整
				article_readmore_status: 'site', // 根据需求设置
				addon_username: '' // 如果需要，可以设置用户名
			});
		} else {
			console.error('nerdReadMoreBoxV4 function is not available');
		}
	} else {
		console.error('.article-content-inner container not found');
	}
}

// 使用 GitHub CDN 上的 script URL，加载优化后的代码
loadScriptFromCDN('https://cdn.jsdelivr.net/gh/MakiDevelop/ReadMore@main/readmorevm.js', insertReadMoreModule);
