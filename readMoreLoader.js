console.log("Starting script execution...");  // 测试脚本是否加载

    window.onload = function() {
        console.log("Window loaded. Starting the observeContentAndExecute function.");

        function observeContentAndExecute() {
            console.log("Starting to observe for .article-content-inner...");

            const observer = new MutationObserver((mutations, obs) => {
                const container = document.querySelector('.article-content-inner');
                if (container) {
                    console.log(".article-content-inner found!");
                    obs.disconnect();

                    function insertReadMoreModule() {
                        console.log("Attempting to insert 'read more' module...");

                        const readmoreContainer = document.createElement('div');
                        readmoreContainer.setAttribute('id', 'readmore_box_v4');
                        container.appendChild(readmoreContainer);
                        console.log("'read more' module inserted into .article-content-inner");

                        const checkInterval = setInterval(() => {
                            console.log("Checking if jQuery and nerdReadMoreBoxV4 are loaded...");
                            if (typeof jQuery !== 'undefined' && typeof jQuery.nerdReadMoreBoxV4 === 'function') {
                                clearInterval(checkInterval);
                                console.log("jQuery and nerdReadMoreBoxV4 are loaded. Initializing 'read more' functionality.");

                                jQuery.nerdReadMoreBoxV4({
                                    read_more_cta: '查看更多文章',
                                    article_readmore_status: 'site',
                                    addon_username: ''
                                });
                            }
                        }, 100);
                    }

                    function loadScriptFromCDN(src, callback) {
                        console.log(`Loading script from ${src}...`);
                        const script = document.createElement('script');
                        script.src = src;
                        script.async = true;
                        script.onload = () => {
                            console.log(`Script loaded successfully from ${src}`);
                            callback();
                        };
                        script.onerror = function() {
                            console.error(`Failed to load script from ${src}`);
                        };
                        document.head.appendChild(script);
                    }

                    if (typeof jQuery === 'undefined') {
                        console.log("jQuery is not loaded. Loading jQuery from CDN...");
                        loadScriptFromCDN('https://code.jquery.com/jquery-3.6.0.min.js', () => {
                            console.log("jQuery loaded. Now loading readmorevm.js...");
                            loadScriptFromCDN('https://cdn.jsdelivr.net/gh/MakiDevelop/ReadMore@main/readmorevm.js', insertReadMoreModule);
                        });
                    } else {
                        console.log("jQuery is already loaded. Loading readmorevm.js directly...");
                        loadScriptFromCDN('https://cdn.jsdelivr.net/gh/MakiDevelop/ReadMore@main/readmorevm.js', insertReadMoreModule);
                    }
                }
            });

            observer.observe(document, {
                childList: true,
                subtree: true
            });
        }

        observeContentAndExecute();
    };Ï
