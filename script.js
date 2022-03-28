const generateHTML = (pageName)=>{
    let randomImage = Math.floor(Math.random()*5) + 1;
    let imagePath = chrome.extension.getURL(`static/${randomImage}.jpg`);

    return `

    <div class="page" style="display: flex; justify-content: center; align-items: center; padding-top: 30px; flex-direction: column;">
        <div class="heading" style="font-size: 2.4rem; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; margin-bottom: 40px; color: rgb(65, 105, 225);">404 - ${pageName} Not Found</div>
        <div class="image-border" style="border: 2px solid  rgb(175, 175, 175); padding: 10px; border-radius: 10px; box-shadow: 3px 3px 7px 7px rgb(204, 197, 197), -3px -3px 7px 7px rgb(226, 217, 217);">
            <div class="image-box" style="display: flex; justify-content: center; align-items: center;">
                <img src="` + imagePath + `" height="320px" width="400px" alt="Image Not Found">
            </div>
        </div>
    </div>
    
    `;
};

if (window.location.hostname === "leetcode.com") {
    document.body.innerHTML = generateHTML("LeetCode");
}
else if (window.location.hostname === "www.geeksforgeeks.org") {
    document.body.innerHTML = generateHTML("GFG");
}
else if (window.location.hostname === "practice.geeksforgeeks.org") {
    document.body.innerHTML = generateHTML("GFG");
}
else if (window.location.hostname === "www.codingninjas.com") {
    document.body.innerHTML = generateHTML("CodeStudio");
}
else if (window.location.hostname === "www.interviewbit.com") {
    document.body.innerHTML = generateHTML("InterviewBit");
}
else if (window.location.hostname === "www.codechef.com") {
    document.body.innerHTML = generateHTML("CodeChef");
}
else if (window.location.hostname === "codeforces.com") {
    document.body.innerHTML = generateHTML("CodeForces");
}