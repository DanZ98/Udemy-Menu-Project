// Local data
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "assets/img/item-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "assets/img/item-2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "assets/img/item-3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "assets/img/item-4.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "assets/img/item-5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "assets/img/item-6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "assets/img/item-7.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "assets/img/item-8.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "assets/img/item-9.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

    // Retrieve div element with class
    const sectionCenter = document.querySelector('.section-center');

    // Retrieve button class filter-btn
    const filterBtns = document.querySelectorAll('.filter-btn');

    // When page loads execute displayMenuItems callback function 
    window.addEventListener('DOMContentLoaded', function(){
      displayMenuItems(menu);
    });

    // Filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            console.log(e.currentTarget.dataset);
        });
    });

    function displayMenuItems(menuItem){

        // Map loop through menu array of objects and alter object's elements dynamically within article element
        let displayMenu = menuItem.map(function(item){
            return ` <article class="menu-item">
                        <img src=${item.img} class="photo" alt=${item.title}>
                        <div class="item-info">
                            <header>
                                <h4>${item.title}</h4>
                                <h4 class="price">$${item.price}</h4>
                            </header>
                            <p class="item-text">${item.desc}</p>
                        </div>
                    </article>`; 
        });

        // Eliminating commas after each article element
        displayMenu = displayMenu.join('');

        // Adding and displaying displayMenu article elements inside of sectionCenter element
        sectionCenter.innerHTML = displayMenu;
    }