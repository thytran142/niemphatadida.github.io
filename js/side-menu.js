function handler() {
    const groups = document.querySelectorAll('div.side-menu-group');
    function toggle(event) {
        const target = event.target;
        const id = target.id;
        const icon = target.querySelector("span");
        const subMenuGroup = document.getElementById(`${id}-submenu`);
        if (subMenuGroup) {
            subMenuGroup.classList.toggle("hidden");
            icon.classList.toggle("rotate");
        }
        event.stopPropagation();
        event.preventDefault();
    }
    if (groups && groups.length > 0) {
        groups.forEach((group, index) => {
            console.log(group);
            const headingLink = group.querySelector("a.heading");
            console.log(headingLink);
            if (headingLink) {
                headingLink.addEventListener("click" ,toggle);
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", handler, false);
