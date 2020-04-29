export const Categories = [
    {
          id:1,
          name:"BOOKS",
          otherName:'Books',
          img:require('../assets/images/Categories/books.png'),
          options:[
            {
              id:1,
               name :'Textbooks'
            },
            {
               id :2,
               name :'Novels'
            },
            {
               id :3,
              name:'Motivational / Self help'
            },
            {
              id:4,
              name:'Audio books'
            },
            {
              id:5,
              name:'Literature / History'
            },
            {
              id:6,
              name:'Others'
            },
          ]  ,     
          category:[
            {
              id:1,
              name:"Single",
              img:require('../assets/images/single.png'),
            },
            {
              id:2,
              name:"Multiple",
              img:require('../assets/images/multiple.png'),
            },
          ]
    },
    {
        id:2,
        name:"HOME APPLIANCES",
        img:require('../assets/images/Categories/homeAppliances.png'),
        transaction:['single','multiple'],
        category:[
        ]
    },
    {
      id:3,
      name:"FASHIONS & WEARS",
      img:require('../assets/images/Categories/fashion.png'),
      transaction:['single','multiple'],
      category:[
        {
          id:1,
          name:"Women",
          img:require('../assets/images/women.png')
        },
        {
          id:2,
          name:"Men",
          img:require('../assets/images/men.png')
        },
      ]
    },
    {
      id:4,
      name:"KIDS",
      img:require('../assets/images/Categories/kids.png'),
      transaction:['single','multiple'],
      category:[
     
      ]
    },
    {
      id:5,
      name:"ELECTRONICS",
      img:require('../assets/images/Categories/electronics.png'),
      transaction:['single','multiple'],
      category:[
      ]
    },
    {
      id:6,
      name:"FOOD",
      img:require('../assets/images/Categories/foods.png'),
      transaction:['single','multiple'],
      category:[
      ]
    },
    {
      id:7,
      name:"SUPPORT/SPONSOR",
      img:require('../assets/images/Categories/support.png'),
      transaction:['single','multiple'],
      category:[
      ]
    },
    {
      id:8,
      name:"OTHERS",
      img:require('../assets/images/Categories/others.png'),
      transaction:['single','multiple'],
      category:[
      ]
  },
  ]
  
  export const DummyData = [
    {
      title: 'Women',
      img:require('../assets/images/women.png'),
      subcategories: [
        {
          title: 'Wears',
          subcategories: [
            {title: 'Dresses'},
            {title: 'Tops'},
            {title: 'Trousers'},
            {title: 'Jumpsuits & Playsuits'},
            {title: 'Suit & Blazers'},
            {title: 'Shirts'},
          ],
        },
        {
          title: 'Shoes',
          subcategories: [
            {title: 'Ballerinas & Flats'},
            {title: 'Heels'},
            {title: 'Sandals & Slippers'},
            {title: 'Wedges'},
            {title: 'Sport shoes'},
            {title: 'Shoes & Bags'},
          ],
        },
        {
          title: 'accessories',
          subcategories: [
            {title: 'Bags'},
            {title: 'Belts'},
            {title: 'Purses & Clutches'},
            {title: 'Wallets'},
            {title: 'Jewellery'},
            {title: 'Hats & Scarves'},
          ],
        },
      ],
    },
    {
      title: 'Men',
      img:require('../assets/images/women.png'),
      subcategories: [
        {
          title: 'Wears',
          subcategories: [
            {title: 'Dresses'},
            {title: 'Tops'},
            {title: 'Trousers'},
            {title: 'Jumpsuits & Playsuits'},
            {title: 'Suit & Blazers'},
            {title: 'Shirts'},
          ],
        },
        {
          title: 'Shoes',
          subcategories: [
            {title: 'Ballerinas & Flats'},
            {title: 'Heels'},
            {title: 'Sandals & Slippers'},
            {title: 'Wedges'},
            {title: 'Sport shoes'},
            {title: 'Shoes & Bags'},
          ],
        },
        {
          title: 'accessories',
          subcategories: [
            {title: 'Bags'},
            {title: 'Belts'},
            {title: 'Purses & Clutches'},
            {title: 'Wallets'},
            {title: 'Jewellery'},
            {title: 'Hats & Scarves'},
          ],
        },
      ],
    },
  ]
  