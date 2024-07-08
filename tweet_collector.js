let i = 1;
let dict = {};
let like_regex = /\b(\d+) J'aime\b/;
let retweet_regex = /\b(\d+) reposts\b/;
let reply_regex = /\b(\d+) réponses\b/;
let views_regex = /\b(\d+) vues\b/;
            
function loop() {      
    setTimeout(function() {
        window.scrollBy(0,1000);
	let element = document.getElementsByClassName("css-175oi2r r-1kbdv8c r-18u37iz r-1wtj0ep r-1ye8kvj r-1s2bzr4");
        for(let index=0; index<element.length; index++) {
            try {
	        let reply = element[index].innerHTML.match(reply_regex);
	        let like = element[index].innerHTML.match(like_regex);
	        let retweet = element[index].innerHTML.match(retweet_regex);
		let views = element[index].innerHTML.match(views_regex);
	        dict[index] = {
		    "like":`${like[1]}`,
		    "reply":`${reply[1]}`,
		    "retweet":`${retweet[1]}`,
		    "views":`${views[1]}`,
	        };
		    console.log(dict)
           } 
           catch (error) {
	       console.log(error)
           }
        }
        i++;                
        if (i < 100000) {       
            loop();            
        }                      
    }, 500)
}
loop();
