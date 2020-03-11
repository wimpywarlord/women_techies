
import deepai from 'deepai';
import fs from 'fs';



deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

async function asyncall() {
    var resp = await deepai.callStandardApi("summarization", {
            text: fs.createReadStream("C:\Users\HP\Desktop\women_techies\proxies.txt"),
    });
    console.log(resp);
}

asyncall();