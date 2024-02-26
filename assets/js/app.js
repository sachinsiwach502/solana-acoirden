let accord_itm = document.querySelectorAll(".box");

let disp_text = document.querySelector(".txt");
let svg_icon = document.querySelector(".svg");

disp_text.style.display = "block";
svg_icon.style.transform = "rotate(180deg)";

let para = document.querySelector(".para");
let photo = document.querySelector(".photo");

para.style.display = "block";
photo.style.transform = "rotate(180deg)";

accord_itm.forEach(element => {

    let text = element.querySelector(".txt");
    let img = element.querySelector(".svg");
    let small_box = element.querySelector(".w-100");
    let ac_itmes = element.querySelector(".ac_item")
    ac_itmes.addEventListener("click", () => {
        accord_itm.forEach(otherelement => {
            if (otherelement !== element) {
                let disp = otherelement.querySelector(".txt");
                let svg = otherelement.querySelector(".svg");
                disp.style.display = "none";
                svg.style.transform = "rotate(0deg)";
            };
        });

        let disp_prop = window.getComputedStyle(text).display;
        if (disp_prop === "none") {
            text.style.display = "block";
            img.style.transform = "rotate(180deg)";

        } else {
            text.style.display = "none";
            img.style.transform = "rotate(0deg)";
        };


    });

});


let accord = document.querySelectorAll(".part");


accord.forEach(item => {
    let text = item.querySelector(".hidden-para");
    let add = item.querySelector(".add");
    let sub = item.querySelector(".sub");
    let pointer = item.querySelector(".poninter")

    let disp_add = window.getComputedStyle(text).display;
    let num = 1;


    pointer.addEventListener("click", () => {
        accord.forEach(other => {
            if (other !== item) {
                let text_1 = other.querySelector(".hidden-para");
                let add_1 = other.querySelector(".add");
                let sub_1 = other.querySelector(".sub");
                text_1.style.display = "none";
                sub_1.style.display = "none";
                add_1.style.display = "block";
            };
        });

        if (disp_add === "none" && num === 1) {
            text.style.display = "none";
            sub.style.display = "none";
            add.style.display = "block";
            num = 2;
        } else {
            text.style.display = "block";
            sub.style.display = "block";
            add.style.display = "none";
            num = 1;
        }

    });
});

