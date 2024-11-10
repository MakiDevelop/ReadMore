-- 配置关键字和目标域名
set searchKeywords to {"台北美食", "台北景點", "中正美食", "中正景點", "大同美食", "大同景點", "中山美食", "中山景點", "松山美食", "松山景點", "大安美食", "大安景點", "萬華美食", "萬華景點", "信義美食", "信義景點", "士林美食", "士林景點", "北投美食", "北投景點", "內湖美食", "內湖景點", "南港美食", "南港景點", "文山美食", "文山景點", "新北美食", "新北景點", "萬里美食", "萬里景點", "金山美食", "金山景點", "板橋美食", "板橋景點", "汐止美食", "汐止景點", "深坑美食", "深坑景點", "石碇美食", "石碇景點", "瑞芳美食", "瑞芳景點", "平溪美食", "平溪景點", "雙溪美食", "雙溪景點", "貢寮美食", "貢寮景點", "新店美食", "新店景點", "坪林美食", "坪林景點", "烏來美食", "烏來景點", "永和美食", "永和景點", "中和美食", "中和景點", "土城美食", "土城景點", "三峽美食", "三峽景點", "樹林美食", "樹林景點", "鶯歌美食", "鶯歌景點", "三重美食", "三重景點", "新莊美食", "新莊景點", "泰山美食", "泰山景點", "林口美食", "林口景點", "蘆洲美食", "蘆洲景點", "五股美食", "五股景點", "八里美食", "八里景點", "淡水美食", "淡水景點", "三芝美食", "三芝景點", "石門美食", "石門景點", "基隆美食", "基隆景點", "仁愛美食", "仁愛景點", "信義美食", "信義景點", "中正美食", "中正景點", "中山美食", "中山景點", "安樂美食", "安樂景點", "暖暖美食", "暖暖景點", "七堵美食", "七堵景點", "桃園美食", "桃園景點", "中壢美食", "中壢景點", "平鎮美食", "平鎮景點", "龍潭美食", "龍潭景點", "楊梅美食", "楊梅景點", "新屋美食", "新屋景點", "觀音美食", "觀音景點", "桃園美食", "桃園景點", "龜山美食", "龜山景點", "八德美食", "八德景點", "大溪美食", "大溪景點", "復興美食", "復興景點", "新竹美食", "新竹景點", "竹北美食", "竹北景點", "湖口美食", "湖口景點", "新豐美食", "新豐景點", "新埔美食", "新埔景點", "關西美食", "關西景點", "芎林美食", "芎林景點", "寶山美食", "寶山景點", "竹東美食", "竹東景點", "五峰美食", "五峰景點", "橫山美食", "橫山景點", "尖石美食", "尖石景點", "北埔美食", "北埔景點", "峨眉美食", "峨眉景點", "苗栗美食", "苗栗景點", "竹南美食", "竹南景點", "頭份美食", "頭份景點", "三灣美食", "三灣景點", "南庄美食", "南庄景點", "後龍美食", "後龍景點", "通霄美食", "通霄景點", "苑裡美食", "苑裡景點", "苗栗美食", "苗栗景點", "造橋美食", "造橋景點", "頭屋美食", "頭屋景點", "公館美食", "公館景點", "大湖美食", "大湖景點", "泰安美食", "泰安景點", "銅鑼美食", "銅鑼景點", "三義美食", "三義景點", "西湖美食", "西湖景點", "卓蘭美食", "卓蘭景點", "台中美食", "台中景點", "中區美食", "中區景點", "東區美食", "東區景點", "南區美食", "南區景點", "西區美食", "西區景點", "北區美食", "北區景點", "北屯美食", "北屯景點", "西屯美食", "西屯景點", "南屯美食", "南屯景點", "太平美食", "太平景點", "大里美食", "大里景點", "霧峰美食", "霧峰景點", "烏日美食", "烏日景點", "豐原美食", "豐原景點", "后里美食", "后里景點", "石岡美食", "石岡景點", "東勢美食", "東勢景點", "和平美食", "和平景點", "新社美食", "新社景點", "潭子美食", "潭子景點", "大雅美食", "大雅景點", "神岡美食", "神岡景點", "大肚美食", "大肚景點", "沙鹿美食", "沙鹿景點", "龍井美食", "龍井景點", "梧棲美食", "梧棲景點", "清水美食", "清水景點", "大甲美食", "大甲景點", "外埔美食", "外埔景點", "大安美食", "大安景點", "彰化美食", "彰化景點", "彰化美食", "彰化景點", "芬園美食", "芬園景點", "花壇美食", "花壇景點", "秀水美食", "秀水景點", "鹿港美食", "鹿港景點", "福興美食", "福興景點", "線西美食", "線西景點", "和美美食", "和美景點", "伸港美食", "伸港景點", "員林美食", "員林景點", "社頭美食", "社頭景點", "永靖美食", "永靖景點", "埔心美食", "埔心景點", "溪湖美食", "溪湖景點", "大村美食", "大村景點", "埔鹽美食", "埔鹽景點", "田中美食", "田中景點", "北斗美食", "北斗景點", "田尾美食", "田尾景點", "埤頭美食", "埤頭景點", "溪州美食", "溪州景點", "竹塘美食", "竹塘景點", "二林美食", "二林景點", "大城美食", "大城景點", "芳苑美食", "芳苑景點", "二水美食", "二水景點", "南投美食", "南投景點", "南投美食", "南投景點", "中寮美食", "中寮景點", "草屯美食", "草屯景點", "國姓美食", "國姓景點", "埔里美食", "埔里景點", "仁愛美食", "仁愛景點", "名間美食", "名間景點", "集集美食", "集集景點", "水里美食", "水里景點", "魚池美食", "魚池景點", "信義美食", "信義景點", "竹山美食", "竹山景點", "鹿谷美食", "鹿谷景點", "嘉義美食", "嘉義景點", "番路美食", "番路景點", "梅山美食", "梅山景點", "竹崎美食", "竹崎景點", "阿里山美食"}
set targetPattern to ".pixnet.net/blog/post/"
set maxPages to 10

tell application "Safari"
	activate
	
	repeat
		set keyword to item (random number from 1 to count of searchKeywords) of searchKeywords
		
		set searchURL to "https://www.google.com/search?q=" & keyword
		if (count of windows) = 0 then
			make new document with properties {URL:searchURL}
		else
			tell window 1 to make new tab with properties {URL:searchURL}
			set current tab of window 1 to last tab of window 1
		end if
		
		set currentPage to 1
		
		with timeout of 300 seconds
			repeat while currentPage ≤ maxPages
				do JavaScript "
					if (window.alert) {
						window.alert = function() {}; // 禁用 alert 弹窗
					}
				" in current tab of window 1
				
				set randomDelay to (random number from 3 to 7)
				delay randomDelay
				
				do JavaScript "
					(function() {
						var closeButtons = Array.from(document.querySelectorAll('button, .close, .popup-close'));
						var popupClosed = false;
						for (var button of closeButtons) {
							if (button.innerText.includes('关闭') || button.innerText.includes('×')) {
								button.click();
								popupClosed = true;
								break;
							}
						}
						if (!popupClosed) {
							window.history.back();
						}
					})();
				" in current tab of window 1
				
				set foundLink to false
				do JavaScript "
					var links = Array.from(document.querySelectorAll('a'));
					var targetLinks = links.filter(link => 
						/.*\\.pixnet\\.net\\/blog\\/post\\/.*/.test(link.href)
					);
					if (targetLinks.length > 0) {
						var index = Math.floor(Math.random() * Math.min(3, targetLinks.length)); 
						targetLinks[index].click();
						foundLink = true;
					}
				" in current tab of window 1
				
				if foundLink then
					set stayTime to (random number from 8 to 12)
					set scrollTimes to (random number from 2 to 3)
					
					repeat scrollTimes times
						do JavaScript "window.scrollBy(0, window.innerHeight / 3);" in current tab of window 1
						delay (random number from 2 to 4)
					end repeat
					
					delay stayTime
				else
					delay 5
				end if
				
				if currentPage < maxPages then
					do JavaScript "
						var nextPageLink = document.querySelector('a#pnnext');
						if (nextPageLink) { 
							nextPageLink.click(); 
						}
					" in current tab of window 1
					delay (random number from 3 to 5) -- 等待加载下一页
				end if
				
				set currentPage to currentPage + 1
			end repeat
		end timeout
		
		close current tab of window 1
		
		delay (random number from 8 to 15)
	end repeat
end tell
