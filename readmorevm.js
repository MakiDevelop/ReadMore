// 定义 nerdReadMoreBoxV4 函数，用于在文章内容末尾添加“查看更多”功能
function nerdReadMoreBoxV4(options) {
    // 检查 jQuery 是否已加载
    if (typeof jQuery === 'undefined') {
        // 动态加载 jQuery
        var script = document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        script.onload = function() {
            // jQuery 加载完成后执行主函数
            mainFunction(options);
        };
        document.head.appendChild(script);
    } else {
        // jQuery 已加载，直接执行主函数
        mainFunction(options);
    }
}

// 主函数定义
function mainFunction(options) {
    console.log("Initializing nerdReadMoreBoxV4...");

    // 获取或设置选项参数
    const read_more_cta = options['read_more_cta'] || '查看更多文章';
    const article_readmore_status = options['article_readmore_status'] || 'site';
    const addon_username = options['addon_username'] || '';

    // 确认文章内容容器是否存在
    const container = $('.article-content-inner');
    if (container.length === 0) {
        console.error('.article-content-inner container not found.');
        return;
    }

    // 检查文章长度是否足够添加“查看更多”功能
    const contentHeight = container.height();
    const threshold = 300; // 设定的高度阈值，单位：像素
    if (contentHeight <= threshold) {
        console.log('文章内容较短，无需插入“查看更多”按钮');
        return;
    }

    // 创建并插入“查看更多”按钮
    const readmoreContainer = $('<div id="readmore_box_v4"></div>');
    readmoreContainer.html(`<button id="readmore_button">${read_more_cta}</button>`);
    container.append(readmoreContainer);

    // 绑定“查看更多”按钮的点击事件
    $('#readmore_button').off('click').on('click', function() {
        // 切换样式类来展开内容
        container.toggleClass('readmore-expanded');
        $(this).text(container.hasClass('readmore-expanded') ? '收起文章' : read_more_cta);
    });

    // 添加 CSS 样式
    addReadMoreStyles();
    console.log("Read More module inserted successfully.");
}

// 添加相关的 CSS 样式
function addReadMoreStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .article-content-inner {
            max-height: 300px;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        .article-content-inner.readmore-expanded {
            max-height: none;
            overflow: visible;
        }
        #readmore_button {
            display: block;
            margin: 10px auto;
            padding: 8px 16px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        #readmore_button:hover {
            background-color: #0056b3;
        }
    `;
    document.head.appendChild(style);
}

// 示例调用
nerdReadMoreBoxV4({
    read_more_cta: '查看更多文章', // 设置按钮 CTA 文案
    article_readmore_status: 'site', // 仅用于标记，可以自定义
    addon_username: '' // 如果需要，可以设置用户名
});
