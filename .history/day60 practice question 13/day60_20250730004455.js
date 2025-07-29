function car(title, cname, view, duration, month) {
    let viewStr;
    if (view < 1000) {
        viewStr = view;
    } else if (view >= 1000000) {
        viewStr = (view / 1000000).toFixed(1) + "M";
    } else {
        viewStr = (view / 1000).toFixed(1) + "K";
    }

    let html = `
    <div class="card">
        <img src="sigma.avif" width="125px" height="75px" alt="sigma logo" class="logo">
        <div class="time">${duration}</div>
        <div class="description">
            <h5 class="subject"><a href="https://www.bing.com/videos/riverview/relatedvideo?q=code+with+harry+web+devlopment+i+foirst+vifep&mid=E41CED5B9D22E3780848E41CED5B9D22E3780848&FORM=VIRE">${title}</a></h5>
            <p class="about">${cname} . ${viewStr} views . ${month} months ago</p>
        </div>
    </div>`;
    
   document.querySelector(".container").innerHTML = html;
}
 car("Installing VS Code & How Websites Work | Sigma WebDevelopment Course - Tutorial #1 ", "CodeWithHarry", 1000000, '31:20', "1");

