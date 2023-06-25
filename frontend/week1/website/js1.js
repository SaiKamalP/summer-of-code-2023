function section_1_top_bar_menu_color_for_item_on_focus(itemNumber){
    var menuItems=document.querySelectorAll(".section-1-static-top-bar-menu-item");
    for(const item of menuItems){
        item.className="section-1-static-top-bar-menu-item";
    }
    menuItems[itemNumber].className="section-1-static-top-bar-menu-item section-1-static-top-bar-menu-item-onfocus";
}
function section_1_top_bar_menu_click(itemNumber){
    section_1_top_bar_menu_color_for_item_on_focus(itemNumber);
}
document.addEventListener('DOMContentLoaded', function() {
    var menuItems=document.querySelectorAll(".section-1-static-top-bar-menu-item");
    for(var i=0;i<menuItems.length;i++){
        const x=i;
        menuItems[i].addEventListener("click",function(){
            section_1_top_bar_menu_click(x);
        });
    }    
});