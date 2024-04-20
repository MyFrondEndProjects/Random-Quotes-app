let Tweet = document.querySelector(".tweettext");
let Changebutton = document.querySelector(".tweet");
let Person = document.querySelector(".person");
let Add = document.querySelector(".Add");
let hashtag = null;
let Quotes = [];

const Sozler = () => {
    return fetch(" https://type.fit/api/quotes")
        .then(response => response.json()) // Buradaki hatayı düzeltildi
        .then(data => {
            Quotes = data;

            Quoteschange();
        })
}


const Quoteschange = () => {

    let Quatess = Quotes.length;

    let Random = Math.floor(Math.random() * Quatess);

    Tweet.textContent = Quotes[Random].text;
    Person.textContent = Quotes[Random].author;
    hashtag = Person.textContent;


}

const tweet = () => {
    let text = Tweet.textContent;

    window.location.href = 'https://twitter.com/intent/tweet?hashtags=' + encodeURIComponent(hashtag) + '&text=' + encodeURIComponent('"' + text + '"');

}
Sozler();






Add.addEventListener("click", tweet);
Changebutton.addEventListener("click", Quoteschange);





