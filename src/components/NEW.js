export const Categories = [
  {
        id:1,
        name:"Books",
        img:require('../assets/images/Categories/books.png'), 
        item_count:12,   
        category:[
          {
            id:1,
            name:"Single",
            img:require('../assets/images/single.png'),
            subcategories:[
              {title :'Textbooks'},
              {title :'Novels'},
              {title:'Motivational / Self help'},
              {title:'Audio books'},
              {title:'Literature / History'},
              {title:'Others'},
            ]  , 
          },
          {
            id:2,
            name:"Multiple",
            img:require('../assets/images/multiple.png'),
            subcategories:[
              {title :'Textbooks'},
              {title :'Novels'},
              {title:'Motivational / Self help'},
              {title:'Audio books'},
              {title:'Literature / History'},
              {title:'Others'},
            ]  , 
          },
        ]
  },
  {
      id:2,
      name:"Home Appliances",
      item_count:24,   

      img:require('../assets/images/Categories/homeAppliances.png'),
      transaction:['single','multiple'],
      category:[
        {title :'Iron & Steamers'},
        {title :'Toasters & Sandwich Mixers'},
        {title:'Deep Fryers & Rice Cookers'},
        {title:'Electric kettles'},
        {title:'Microwaves'},
        {title:'Bed & Mattress'},
        {title :'Curtains & Blinds'},
        {title :'Rugs & Carpets'},
        {title:' Housekeeping & Pet Supplies'},
        {title:'Others'},
      ]
  },
  {
    id:3,
    name:"Fashions & Wears",
    img:require('../assets/images/Categories/fashion.png'),
    item_count:37,   

    category:[
      {
        id:1,
        name:"Women",
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
            title: 'Asccessories',
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
        id:2,
        name:"Men",
        img:require('../assets/images/men.png'),
        subcategories: [
          {
            title: 'Wears',
            subcategories: [
              {title: 'Shirts'},
              {title: 'Polos'},
              {title: 'T-shirts'},
              {title: 'Jeans'},
              {title: 'Trousers & Shorts'},
              {title: 'Suits, Blazers & Jackets'},
              {title: 'Pyjamas'},
              {title: 'Jerseys'},
              {title: 'Traditional Wear'},


            ],
          },
          {
            title: 'Shoes',
            subcategories: [
              {title: 'Casual shoes'},
              {title: 'Formal shoes'},
              {title: 'Slippers & Sandals'},
              {title: 'Shoe care'},
            ],
          },
          {
            title: 'Accessories',
            subcategories: [
              {title: 'Belts'},
              {title: 'Wallets'},
              {title: 'Socks & Underwear'},
              {title: 'Caps & Hats'},
              {title: 'Jewellery'},
              {title: 'Bags'},
              {title: 'Ties & Cufflinks'},

            ],
          },
        ],
      },
    ]
  },
  {
    id:4,
    name:"Kids",
    item_count:30,   

    img:require('../assets/images/Categories/kids.png'),
    category:[
      {title :'Toys'},
      {title :'Dresses'},
      {title:'Shirts'},
      {title:'Tops, Jackets & Sweatshirts'},
      {title:'Denim, Trousers & Leggings'},
      {title:'Underwear & Socks'},
      {title :' Watches'},
      {title :'Shoes'},
      {title:'Bodysuits & Playsuits'},
      {title:'Baby essentials'},
      {title:'Bibs & Burp clothes'},
      {title:'Bottle Feeding'},
      {title :'Pacifiers & Teethers'},
      {title :'Baby food & Formula'},
      {title:' Maternity tops & Jackets'},
      {title:'Maternity Dresses'},
      {title:'Maternity Accessories'},
    ]
  },
  {
    id:5,
    name:"Electronics",
    item_count:35,   

    img:require('../assets/images/Categories/electronics.png'),
    category:[
      {title :'Phones'},
      {title :'Phone Accessories'},
      {title:'Ipads / Tablets'},
      {title:'Camera'},
      {title:'Laptops'},
      {title:' Computer Systems'},
      {title :'Computer Accessories'},
      {title:' Printer, Scanner & Accessories'},
      {title:'Gaming'},
      {title:'Projectors'},
      {title:'TV'},
      {title :'Watches'},
      {title :'Automobile'},
      {title:'Others'},
     
    ]
  
  },
  {
    id:6,
    name:"Food",
    item_count:45,   

    img:require('../assets/images/Categories/foods.png'),
    transaction:['single','multiple'],
    category:[
      {title:"Raw"},
      {title:"Canned"},
      {title:"Sealed"},
    ]
  },
  {
    id:7,
    name:"Support/Sponsor",
    item_count:24,   

    img:require('../assets/images/Categories/support.png'),
    transaction:['single','multiple'],
    category:[
      {title:"School Fees / Tuition Support"},
      {title:"Health Support"},
      {title:"Business Support"},
      {title:"Bulk material donation"},
      {title:"Space Allocation"},

    ]
  },
  {
    id:8,
    name:"Others",
    item_count:10,   

    img:require('../assets/images/Categories/others.png'),
    transaction:['single','multiple'],
    category:[
    ]
},
]




// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
// import {RobotoText} from '../../../../components/RobotoText'
// import {RubikText} from '../../../../components/RubikText'

// import {hp,wp} from '../../../../styles/SignUp-styles'

// export default class MainCategory extends React.Component{
// //    Categories = this.props.navigation.getParam('category');

    
    
//     render(){
//         const  Categories = this.props.navigation.getParam('category');
//         const {id,category,name}= Categories;
//         // const {options} = category.options;

//         return(
//             <View style={styles.container}>
//                 {/* start of header  */}
//                 <View style={styles.header}>
//                     <TouchableOpacity
//                         onPress={()=>this.props.navigation.goBack()}
//                     >
//                         <Image source={require('../../../../assets/images/back.png')} resizeMode='contain' style={styles.backIcon} />
//                     </TouchableOpacity>
//                     <RobotoText style={styles.headerText}>{Categories.otherName}</RobotoText>

//                 </View>
//                 {/* end of Header */}
//                 <RobotoText style={styles.topText}>
//                     {
//                         Categories.name==='BOOKS'?'What kind of Transaction?':'Sub Category'
//                     }
//                 </RobotoText>
//                 {/* start of subCategory */}
//                 <View style={{alignItems:"center",marginTop:hp(10),backgroundColor:'#f2f2f2'}}>
//                     {
//                         category.map((item,index)=>{
//                             return(
//                         <TouchableOpacity 
//                             onPress={()=>this.props.navigation.navigate("SubCategory",{Categories:Categories})}

//                             activeOpacity={.8}
//                             style={styles.actionButton}
//                         >
//                         <Image style={styles.icon} resizeMode='contain'
//                             source={item.img}
//                         />
//                         <RubikText style={styles.actionText}>{item.name}</RubikText>

//                     </TouchableOpacity>
//                             )
//                         })
//                     }
                    
                    
//                 </View>
//                 {/* end of subCategory */}

//             </View>
//         )
//     }
// }





// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
// import {RobotoText} from '../../../../components/RobotoText'
// import {RubikText} from '../../../../components/RubikText'


// import {hp,wp} from '../../../../styles/SignUp-styles'

// export default class SubCategory extends React.Component{
    
//     state={
//         currentObject:this.props.navigation.getParam('Categories')
//     }
//     render(){
//         const  Categories = this.props.navigation.getParam('Categories');
//         const {options} =Categories;
//         // const {options} =[category.options];

//         return(
//             <View style={styles.container}>
//                 {/* start of header  */}
//                 <View style={styles.header}>
//                     <TouchableOpacity
//                         onPress={()=>this.props.navigation.goBack()}
//                     >
//                         <Image source={require('../../../../assets/images/back.png')} resizeMode='contain' style={styles.backIcon} />
//                     </TouchableOpacity>
//                     <RobotoText style={styles.headerText}>{Categories.name}</RobotoText>

//                 </View>
//                 {/* end of Header */}
//                 <RobotoText style={styles.topText}>{this.state.currentObject.title || "Sub Category"}</RobotoText>

//                 <View style={styles.search}>
//                     <Image style={styles.searchIcon} resizeMode='contain'
//                             source={require('../../../../assets/images/search.png')}
//                         />
//                     <TextInput style={styles.searchInput} />

//                 </View>
//                 <View style={styles.optionView}>
//                     {
//                         this.state.currentObject.subcategories.map((item,index)=>{
//                         return(
//                             <TouchableOpacity
//                                 key={index}
//                                 onPress={()=>this.setState({})}
//                             style={styles.options}>
//                         <RubikText style={styles.actionText}>{item.name}</RubikText>
//                         <Image style={styles.icon} resizeMode='contain'
//                             source={require('../../../../assets/images/rightarrow.png')}
//                         />

//                          </TouchableOpacity>
                      
//                             )
//                         })
//                     }


//                 </View>

//             </View>
//         )
//     }
// }
// const CategoryItem =(props)=>{
//     const {options} = props
//       return(
//         <TouchableOpacity style={styles.options}>
//         <RubikText style={styles.actionText}>{options.name}</RubikText>
//         <Image style={styles.icon} resizeMode='contain'
//             source={require('../../../../assets/images/rightarrow.png')}
//         />

//     </TouchableOpacity>
      
//       )
//   }
