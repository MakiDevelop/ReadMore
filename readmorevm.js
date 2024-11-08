(function($, undefined) {
	$.extend({
		nerdReadMoreBoxV4: function(options) {
			// 非內文頁就不執行
			// const location_url = location.href;
			// if (!location_url.includes("/blog/post/")) return;

			const read_more_cta = options['read_more_cta'] || '';
			const article_readmore_status = options['article_readmore_status'] || 'site';
			const user_name = (article_readmore_status === 'user') ? options.addon_username || '' : '';
			const deviceType = window.pix.deviceType;
			const mobile_mode = deviceType === 'mobile';
			const no_ad = mobile_mode ? 0 : (document.querySelector('.desktop_no_ad_sidebar_box') ? 1 : 0);
			
			const article_title = mobile_mode ? 
				document.querySelector('.header-title').innerText : 
				document.querySelector('.title').innerText;
			const gam_ad_id_list = ["5267", "5271", "5275", "5279","5283","5287"];
			const gam_ad_size_list = mobile_mode ? [336, 280] : [200, 200];
			const gam_ad_style_list = mobile_mode ? 
				'min-width: 336px; min-height: 280px; margin:6px; margin-bottom:20px;' : 
				'min-width: 220px; min-height: 206px; margin:6px;';

			// 获取推荐文章
			const getRecommendArticles = async () => {
				try {
					const response = await fetch('https://nerdpoc.pixnet.cc/fastapi/api/get_nerd_article_recommend_boost_by_text', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							text: article_title,
							page_size: 20,
							total_num: 12,
							user_name: user_name
						})
					});
					const articleJson = await response.json();
					return articleJson.data.hits || [];
				} catch (error) {
					console.error("Error fetching nerd articles recommended:", error);
					return [];
				}
			};

			// 创建广告区块
			const createAdBlock = (adId, mobile_mode) => {
				const adScript = document.createElement('script');
				adScript.async = true;
				adScript.src = "https://falcon-asset.pixfs.net/js/adsbyfalcon.min.js";

				const adDiv = document.createElement('div');
				adDiv.setAttribute('id', adId);
				adDiv.setAttribute('style', gam_ad_style_list);
				adDiv.appendChild(adScript);

				const listItem = document.createElement('ins');
				listItem.setAttribute('class', 'adsbyfalcon');
				listItem.setAttribute('data-ad-client', '1');
				listItem.setAttribute('data-ad-slot', adId);
				listItem.setAttribute('style', mobile_mode ? 'max-width:100%; text-align: center;' : 'max-width:232px; max-height:218px; text-align: center;');
				listItem.appendChild(adDiv);

				return listItem;
			};

			// 添加广告和推荐文章到容器
			const populateRecommendations = (articleList) => {
				const cardContainer = document.getElementById('ca-article-relate-card-container-v4');
				cardContainer.setAttribute('style', `width: 100%; align-items:center; ${mobile_mode ? '' : 'display: flex; flex-flow: row wrap;'}`);
				
				let resultCounter = 0;

				for (let i = 0; i < articleList.length && resultCounter < 12; i++) {
					const articleData = articleList[i];
					const title = articleData.title;
					const url = articleData.origin_url.replace('http://', 'https://');

					if (article_title === title) continue;

					resultCounter++;

					if (no_ad === 0 && resultCounter % 2 === 0) {
						const adId = gam_ad_id_list[(resultCounter / 2) - 1];
						const adBlock = createAdBlock(adId, mobile_mode);
						cardContainer.appendChild(adBlock);
						resultCounter++;
					}

					const modifiedUrl = new URL(url);
					modifiedUrl.searchParams.set('utm_source', 'PIXNET');
					modifiedUrl.searchParams.set('utm_medium', 'nerd_article_recommend');
					const finalUrl = modifiedUrl.toString();
					const imageLink = articleData.article_thumb?.replace('width=90', 'width=300').replace('height=90', 'height=300') || "https://imageproxy.pimg.tw/zoomcrop?url=https%3A%2F%2Fs.pixfs.net%2Fcommon%2Fppage%2Fimage%2Fnotfound.png&width=300&height=220";

					const listItem = document.createElement('div');
					listItem.setAttribute('class', `ca-card card-${i + 1}`);
					listItem.setAttribute('style', mobile_mode ? 'box-sizing: border-box; padding: 0; margin-bottom: 20px; position: relative; border-radius: 10px; border: 1px #ccc solid; color: #555; line-height: 200%;' : 'box-sizing: border-box; align-self: flex-start; position: relative; width: 220px; min-width: 220px; margin: 6px 6px; background: white;');

					const cardImgItem = document.createElement('div');
					cardImgItem.setAttribute('class', 'card-img');
					cardImgItem.setAttribute('style', `box-sizing: border-box; background-image:url(${imageLink}); width: 100%; height: ${mobile_mode ? '180px' : '130px'}; background-repeat: no-repeat; background-position: center; background-size: cover;`);
					listItem.appendChild(cardImgItem);

					const cardLinkItem = document.createElement('a');
					cardLinkItem.setAttribute('class', 'nerd-card-link-v4');
					cardLinkItem.setAttribute('href', finalUrl);
					cardLinkItem.setAttribute('target', '_blank');
					cardLinkItem.setAttribute('style', 'z-index:1; top: 0; left: 0; right: 0; bottom: 0; position: absolute; background-color: transparent;');
					listItem.appendChild(cardLinkItem);

					const cardInfoItem = document.createElement('div');
					cardInfoItem.setAttribute('class', 'card-info');
					cardInfoItem.setAttribute('style', 'box-sizing: border-box; position: relative; padding: 12px 12px;');
					
					const cardInfoTitleItem = document.createElement('p');
					cardInfoTitleItem.setAttribute('class', 'card-title');
					cardInfoTitleItem.setAttribute('style', 'font-size: 15px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;');
					cardInfoTitleItem.textContent = title;
					cardInfoItem.appendChild(cardInfoTitleItem);
					listItem.appendChild(cardInfoItem);

					cardContainer.appendChild(listItem);
				}
			};

			// 主逻辑，获取推荐文章并填充内容
			getRecommendArticles().then(populateRecommendations);

			// 插入查看更多模块
			let readmoreHtml = `<div id="ca-article-relate-card-container-v4"></div>`;
			if (read_more_cta.length > 0) {
				readmoreHtml = `<div id="read_more_cta_v4" class="tag__header" style="box-sizing: border-box; font-size: 14px; padding-bottom: 10px;">${read_more_cta}</div>` + readmoreHtml;
			}
			readmoreHtml = `<div id="readmore_box_v4" style="box-sizing: border-box; margin-top: 30px;">${readmoreHtml}</div>`;
			$(readmoreHtml).insertBefore('.poi-section');
		}
	});
})(jQuery);
