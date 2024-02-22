
const friends = ["Rahim", "korim", "hero alom"];


for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    const temp = element.length;
    // console.log(temp); 
}




for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 2 === 0) { // Check if i is a perfect square
        console.log("First square number encountered:", i);
        break;
    }
    console.log(i);
}