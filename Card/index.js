let cards=[
    {
        image:"https://media.comicbook.com/2020/12/naruto-1249229-1280x0.jpeg",
        value:1,
        status:"closed"
    },
    {
        image:"https://media.comicbook.com/2020/12/naruto-1249229-1280x0.jpeg",
        value:1,
        status:"closed"
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:2,
        status:"closed"
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:2,
        status:"closed"
    },
    {
        image:"https://devdiscourse.blob.core.windows.net/devnews/24_07_2020_03_29_13_2493486.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://devdiscourse.blob.core.windows.net/devnews/24_07_2020_03_29_13_2493486.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://nofilmschool.com/sites/default/files/styles/structured_1x1/public/detective-pikachu-leaks-online-ryan-reynolds-1200.jpeg?itok=-uJfx2MW",
        value:4,
        status:"closed"
    },
    {
        image:"https://nofilmschool.com/sites/default/files/styles/structured_1x1/public/detective-pikachu-leaks-online-ryan-reynolds-1200.jpeg?itok=-uJfx2MW",
        value:4,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1580923368248-877f237696cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGdyb290fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:5,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1580923368248-877f237696cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGdyb290fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:5,
        status:"closed"
    }

]
// Dursten suffling algo
let temp;
for(let i =cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}

let cardsCopy=cards;

function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`

        <div class ="card" style="background-image:url('${card.image}')">
              <div class=" overlay ${card.status}" onclick="openCard(${index})">
              </div>
        </div>

       `;

    });
    document.getElementById('cards').innerHTML=cardsString;
}
displayCards(cards);



let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;

    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
// reset after one guess

            val1=null;
            val2=null;
            cardCount=1;


        }

        else{
            alert("Game Over");

            location.reload()

        }
    }

    displayCards(cards);
}
