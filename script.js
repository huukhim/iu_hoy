let container = document.getElementById('container');
let count = 40;

for (let i = 0; i < count; i++) {
    let snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Tốc độ rơi từ 5 đến 10 giây
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Độ trễ cho mỗi bông tuyết
    snowflake.style.backgroundImage = 'url(' + (Math.random() < 0.5 ? 'sakura-blossom-alice-md.png' : 'sakura-petal-pink-md.png') + ')';
    snowflake.style.width = Math.random() * 20 + 20 + 'px'; // Độ lớn ngẫu nhiên
    snowflake.style.height = snowflake.style.width; // Bảo đảm bông tuyết là hình vuông
    container.appendChild(snowflake);
}
