(function ($) {
    $.fn.nerdReadMoreBoxV4 = function (options) {
        const defaults = {
            max_articles: 12,
            mobile_check_fn: () => window.pix.deviceType === 'mobile',
            no_ad_selector: '.desktop_no_ad_sidebar_box',
            article_title: '',
            user_name: ''
        };

        const settings = $.extend(defaults, options);

        const fetchRecommendedArticles = async () => {
            try {
                const response = await fetch('https://nerdpoc.pixnet.cc/fastapi/api/get_nerd_article_recommend_boost_by_text', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: settings.article_title,
                        page_size: 20,
                        total_num: settings.max_articles,
                        user_name: settings.user_name
                    })
                });
                const data = await response.json();
                return data.data.hits || [];
            } catch (error) {
                console.error("Error fetching recommended articles:", error);
                return [];
            }
        };

        const renderArticles = (articles) => {
            const articleList = $('<div class="article-list" style="display: flex; flex-wrap: wrap;"></div>');
            articles.forEach(article => {
                const articleItem = $(`
    <div class="article" style="width: 150px; margin: 15px; text-align: center;">
    <a href="${article.url}?utm_source=1px.tw&utm_medium=web&utm_campaign=readMoreBox" target="_blank">
    <img src="${article.article_thumb}" alt="${article.title}" style="width: 100%; height: auto; margin-bottom: 10px;">
    <span>${article.title}</span>
    </a>
    </div>
    `);
                articleList.append(articleItem);
            });
            $(this).append(articleList);
        };

        fetchRecommendedArticles().then(articles => {
            if (articles.length) {
                renderArticles.call(this, articles);
            } else {
                console.log("No recommended articles found.");
            }
        });

        return this;
    };
})(jQuery);
