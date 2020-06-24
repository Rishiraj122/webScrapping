const request = require('request');
const cheerio = require('cheerio');
const jsonfile = require('jsonfile');


request("https://www.amazon.in/dp/9389152046/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-9&pf_rd_r=D9ZGJPM4ADND38CYZVXB&pf_rd_t=101&pf_rd_p=0e455d6f-4a0a-4daf-9f11-fb3d90cabcd5&pf_rd_i=976389031", function(error, res, html) {
    if (!error && res.statusCode == 200) {
        const $ = cheerio.load(html);
        var h1 = $(".a-color-price").text();
        var h2 = $("#productTitle").text();
        var pos = h1.slice(17, 23);
        var pos2 = h2.slice(1, 23);
        console.log("Amazon");
        console.log(pos);
        console.log(pos2);
    } else {
        console.log(error);
    }


})

request("https://www.flipkart.com/stories-never-tell/p/itm4e5c70d1fd65b?pid=9789389152043&lid=LSTBOK9789389152043O6M5LA&marketplace=FLIPKART&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&fm=SEARCH&iid=9dacd715-547f-44f0-972a-33d07e9ec640.9789389152043.SEARCH&ppt=sp&ppn=sp&ssid=phm66feeps0000001592999766935&qH=b5d24a63472bf635", function(error, res, html) {
    if (!error && res.statusCode == 200) {
        const $ = cheerio.load(html);
        var h1 = $("._35KyD6").text();
        var h2 = $("._3qQ9m1").text();
        console.log("Flipkart");
        console.log(h1);
        console.log(h2);
    } else {
        console.log(error);
    }


})