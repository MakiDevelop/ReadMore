!function($){$.fn.nerdReadMoreBoxV4=function(options){const defaults={max_articles:12,mobile_check_fn:()=>"mobile"===window.pix.deviceType,no_ad_selector:".desktop_no_ad_sidebar_box",article_title:"",user_name:""},settings=$.extend(defaults,options),renderArticles=articles=>{const articleList=$('<div class="article-list" style="display: flex; flex-wrap: wrap;"></div>');articles.forEach((article=>{const articleItem=$(`\n    <div class="article" style="width: 150px; margin: 15px; text-align: center;">\n    <a href="${article.url}?utm_source=1px.tw&utm_medium=web&utm_campaign=readMoreBox" target="_blank">\n    <img src="${article.article_thumb}" alt="${article.title}" style="width: 100%; height: auto; margin-bottom: 10px;">\n    <span>${article.title}</span>\n    </a>\n    </div>\n    `);articleList.append(articleItem)})),$(this).append(articleList)};return(async()=>{try{const response=await fetch("https://nerdpoc.pixnet.cc/fastapi/api/get_nerd_article_recommend_boost_by_text",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({text:settings.article_title,page_size:20,total_num:settings.max_articles,user_name:settings.user_name})});return(await response.json()).data.hits||[]}catch(error){return console.error("Error fetching recommended articles:",error),[]}})().then((articles=>{articles.length?renderArticles.call(this,articles):console.log("No recommended articles found.")})),this}}(jQuery);