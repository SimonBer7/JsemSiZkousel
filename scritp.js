class Produkt {
    constructor(title, description, price, rating, stock, brand, photo) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.photo = photo;
    }

    getCard() {
        return `<div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">`+ this.brand + `</strong>
                            <h3 class="mb-0">`+ this.title + `</h3>
                            <div class="mb-1 text-body-secondary">Price: `+ this.price + ` $</div>
                            <p class="card-text mb-auto">`+ this.description +`</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                            <div class="mb-1 text-body-secondary">Stock: `+ this.stock + ` $</div>
                            <div class="mb-1 text-body-secondary">Rating: `+ this.rating + ` $</div>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="`+ this.photo +`" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>`;
    }
}


class Evidence {
    constructor() {
        this.produkty = [];
    }

    addProdukt(produkt) {
        this.produkty.push(produkt);
    }

}

let currentProdukt;

function getFromWeb() {
    for (let i = 1; i < 11; i++) {
        $.ajax({
            url: "https://dummyjson.com/products/" + i,
            dataType: "json",
            success: function (data) {
                let produkt = new Produkt(data.title, data.description, data.price, data.rating, data.stock, data.brand, data.images[1]);
                currentProdukt = produkt;
                $("#title" + i).text(produkt.title);
                $("#brand" + i).text(produkt.brand);
                $("#description" + i).text(produkt.description);
                $("#rating" + i).text("Rating: "+produkt.rating);
                $("#prize" + i).text("Prize: "+produkt.price);
                $("#stock" + i).text("Stock: "+produkt.stock);
                //fotka
            
            
            },
            error: function () { // error callback 
                alert('Error with connection to website');
            }
        });
    }
}

function printProdukt(produkt){
    let html = "";
    html += produkt.getCard();
    document.getElementById("catalog").innerHTML = html;
}


$(document).ready(function () {
    getFromWeb();

    $("#generate").click(function () {
        $(".container").fadeToggle();
        $("#card").slideDown();
    });

});





