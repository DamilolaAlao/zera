import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import OnBoarding from '../screens/Auth/onBoarding.js';
import SignUp from '../screens/Auth/signUp.js';
import SignIn from '../screens/Auth/signIn.js';
import CorpSignUp from '../screens/Auth/corpSignUp';
import MainNavigation from './drawerNav';
// import HomeNav from '../screens/User/Home/HomeNav'
// import BottomTab from './bottomTab'
import MainCategory from '../screens/User/Home/Books/mainCategory'
import FashionCategory from '../screens/User/Home/Fashion/mainCategory'
import Action from '../screens/User/Home/action'

import SubCategory from '../screens/User/Home/Books/subCategory'
import FashionSubCategory from '../screens/User/Home/Fashion/subCategory'
import KidsSubCategory from '../screens/User/Home/Kids/subCategory'
import KiditemForm from '../screens/User/Home/Kids/giveForm'
import GivebookForm from '../screens/User/Home/Books/giveBook'
import GiveFashionform from '../screens/User/Home/Fashion/giveForm'
import FashionOptions from '../screens/User/Home/Fashion/options'

import Success from '../screens/User/Home/Books/success'
import DeliveryOptions from '../screens/User/Home/Books/DeliveryOptions'
import DeliveryLocation from '../screens/User/Home/Books/DeliveryLocation'
import GiveItemDetails from '../screens/User/Home/Books/GiveItemDetails'
import GetDetails from '../screens/User/Home/Get/getDetails'
import placeRequest from '../screens/User/Home/Get/placeRequest'
import SwapForm from '../screens/User/Home/Swap/give'
import GetPool from '../screens/User/Home/Swap/get'
import WantForm from '../screens/User/Home/Swap/want'
import SgetDetails from '../screens/User/Home/Swap/getDetails'

import Camera from '../screens/User/Home/Books/Camera'
import Scamera from '../screens/User/Home/Swap/Camera'
import Anonymous from '../screens/User/Home/Books/Anonymous'


import OthersForm from '../screens/User/Home/Books/othersForm'
import ContactUs from '../screens/User/contactUs/index'
import Feedback from '../screens/User/contactUs/feedback'
import EmailFeedback from '../screens/User/contactUs/email'
import TechnicalFeedback from '../screens/User/contactUs/technical'
import TestimonyFeedback from '../screens/User/contactUs/testimony'
import TuitionForm from '../screens/User/Home/Support/Tuition'
import History from '../screens/User/Dashboard/history'
import ElectronicsSubCategory from '../screens/User/Home/Electronics/subCategory'
import AppliancesSubCategory from '../screens/User/Home/HomeAppliances/subCategory'
import AppliancesItemForm from '../screens/User/Home/HomeAppliances/giveForm'

import ElectronicsItemForm from '../screens/User/Home/Electronics/giveForm'
import SupportSubCategory from '../screens/User/Home/Support/subCategory'
import BusinessForm from '../screens/User/Home/Support/Business'
import HealthForm from '../screens/User/Home/Support/Heath'
import GiveFoodform from '../screens/User/Home/Foods/giveForm'
import FoodSubCategory from '../screens/User/Home/Foods/subCategory'
import ItemDetails from '../screens/User/Dashboard/itemDetails'
import Get  from '../screens/User/Home/Get/index'

import Transactions from '../screens/User/Dashboard/Transactions/index.js'
import TransactionDetails from '../screens/User/Dashboard/Transactions/ViewDetails.js'
import Profile from '../screens/User/Profile/index'
import PersonalInfo from '../screens/User/Profile/Personalinfo'
import ResetPassword from '../screens/User/Profile/ResetPassword'
import Settings from '../screens/User/Profile/settings'
import SetVisibility from '../screens/User/Profile/SetVisibility'
import SingularChat from '../screens/User/Chats/SingularChat'

export default AuthNav = createAppContainer(
    createStackNavigator({
      OnBoarding: { screen: OnBoarding, navigationOptions: { headerShown: false } },
        SignUp: { screen: SignUp, navigationOptions: { headerShown: false } },
        SignIn: { screen: SignIn, navigationOptions: { headerShown: false } },
        CorpSignUp: { screen: CorpSignUp, navigationOptions: { headerShown: false } },
        MainNavigation: { screen: MainNavigation, navigationOptions: { headerShown: false } },
        // BottomTab: { screen: BottomTab, navigationOptions: { headerShown: false } },
        BooksCategory: { screen: MainCategory, navigationOptions: { headerShown: false } },
        FashionCategory: { screen: FashionCategory, navigationOptions: { headerShown: false } },
        Action: { screen: Action , navigationOptions: { headerShown: false } },
        SubCategory: { screen: SubCategory, navigationOptions: { headerShown: false } },
        FashionSubCategory: { screen: FashionSubCategory, navigationOptions: { headerShown: false } },
        FashionOptions: { screen: FashionOptions, navigationOptions: { headerShown: false } },

        GivebookForm: { screen: GivebookForm, navigationOptions: { headerShown: false } },
        GiveFashionform: { screen: GiveFashionform, navigationOptions: { headerShown: false } },
        Camera: { screen: Camera, navigationOptions: { headerShown: false } },
        Scamera: { screen: Scamera, navigationOptions: { headerShown: false } },
        Anonymous: { screen: Anonymous, navigationOptions: { headerShown: false } },
        Success: { screen: Success, navigationOptions: { headerShown: false } },
        OthersForm: { screen: OthersForm, navigationOptions: { headerShown: false } },
        ContactUs: { screen: ContactUs, navigationOptions: { headerShown: false } },
        Feedback: { screen: Feedback, navigationOptions: { headerShown: false } },
        EmailFeedback: { screen: EmailFeedback, navigationOptions: { headerShown: false } },
        TestimonyFeedback: { screen: TestimonyFeedback, navigationOptions: { headerShown: false } },
        TechnicalFeedback: { screen: TechnicalFeedback, navigationOptions: { headerShown: false } },
        TuitionForm: { screen: TuitionForm, navigationOptions: { headerShown: false } }, 
        History: { screen: History, navigationOptions: { headerShown: false } }, 
        KidsSubCategory: { screen: KidsSubCategory, navigationOptions: { headerShown: false } }, 
        ElectronicsSubCategory: { screen: ElectronicsSubCategory, navigationOptions: { headerShown: false } }, 
        AppliancesSubCategory: { screen: AppliancesSubCategory, navigationOptions: { headerShown: false } }, 

        AppliancesItemForm: { screen: AppliancesItemForm, navigationOptions: { headerShown: false } }, 


        ElectronicsItemForm: { screen: ElectronicsItemForm, navigationOptions: { headerShown: false } }, 

        KiditemForm: { screen: KiditemForm, navigationOptions: { headerShown: false } }, 

        SupportSubCategory: { screen: SupportSubCategory, navigationOptions: { headerShown: false } }, 
        HealthForm: { screen: HealthForm, navigationOptions: { headerShown: false } }, 


        BusinessForm:{screen:BusinessForm,navigationOptions:{headerShown:false}},
        GiveFoodform:{screen:GiveFoodform,navigationOptions:{headerShown:false}},
        FoodSubCategory:{screen:FoodSubCategory,navigationOptions:{headerShown:false}},
        ItemDetails:{screen:ItemDetails,navigationOptions:{headerShown:false}},
        GetItems:{screen:Get,navigationOptions:{headerShown:false}},
        // Transactions:{screen:Transactions,navigationOptions:{headerShown:false}},
        TransactionDetails:{screen:TransactionDetails,navigationOptions:{headerShown:false}},
        Profile:{screen:Profile,navigationOptions:{headerShown:false}},
        EditPersonalInfo:{screen:PersonalInfo,navigationOptions:{headerShown:false}},
        ResetPassword:{screen:ResetPassword,navigationOptions:{headerShown:false}},
        Settings:{screen:Settings,navigationOptions:{headerShown:false}},
        SetVisibility:{screen:SetVisibility,navigationOptions:{headerShown:false}},
        SingularChat:{screen:SingularChat,navigationOptions:{headerShown:false}},
        DeliveryOptions:{screen:DeliveryOptions,navigationOptions:{headerShown:false}},
        DeliveryLocation:{screen:DeliveryLocation,navigationOptions:{headerShown:false}},
        GiveItemDetails:{screen:GiveItemDetails,navigationOptions:{headerShown:false}},
        GetDetails:{screen:GetDetails,navigationOptions:{headerShown:false}},
        placeRequest:{screen:placeRequest,navigationOptions:{headerShown:false}},
        SwapForm:{screen:SwapForm,navigationOptions:{headerShown:false}},
        WantForm:{screen:WantForm,navigationOptions:{headerShown:false}},
        GetPool:{screen:GetPool,navigationOptions:{headerShown:false}},
        SgetDetails:{screen:SgetDetails,navigationOptions:{headerShown:false}},







        

      AppliancesItemForm: {
        screen: AppliancesItemForm,
        navigationOptions: {headerShown: false},
      },

      ElectronicsItemForm: {
        screen: ElectronicsItemForm,
        navigationOptions: {headerShown: false},
      },

      KiditemForm: {
        screen: KiditemForm,
        navigationOptions: {headerShown: false},
      },

      SupportSubCategory: {
        screen: SupportSubCategory,
        navigationOptions: {headerShown: false},
      },
      HealthForm: {screen: HealthForm, navigationOptions: {headerShown: false}},

      BusinessForm: {
        screen: BusinessForm,
        navigationOptions: {headerShown: false},
      },
      GiveFoodform: {
        screen: GiveFoodform,
        navigationOptions: {headerShown: false},
      },
      FoodSubCategory: {
        screen: FoodSubCategory,
        navigationOptions: {headerShown: false},
      },
      ItemDetails: {
        screen: ItemDetails,
        navigationOptions: {headerShown: false},
      },
      GetItems: {screen: Get, navigationOptions: {headerShown: false}},
      // Transactions:{screen:Transactions,navigationOptions:{headerShown:false}},
      TransactionDetails: {
        screen: TransactionDetails,
        navigationOptions: {headerShown: false},
      },
      Profile: {screen: Profile, navigationOptions: {headerShown: false}},
      EditPersonalInfo: {
        screen: PersonalInfo,
        navigationOptions: {headerShown: false},
      },
      ResetPassword: {
        screen: ResetPassword,
        navigationOptions: {headerShown: false},
      },
      Settings: {screen: Settings, navigationOptions: {headerShown: false}},
      SetVisibility: {
        screen: SetVisibility,
        navigationOptions: {headerShown: false},
      },
    },
    {
      initialRouteName: 'OnBoarding',
    }
  )
);
