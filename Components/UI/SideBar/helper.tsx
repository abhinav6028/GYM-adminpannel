import Inventory2Icon from '@mui/icons-material/Inventory2';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Shop2Icon from '@mui/icons-material/Shop2';
import LanguageIcon from '@mui/icons-material/Language';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PaidIcon from '@mui/icons-material/Paid';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import CategoryIcon from '@mui/icons-material/Category';

export const subRoutes: any = [

    // {
    //     name: 'Dashboard',
    //     icon: SpaceDashboardIcon,
    //     children: [
    //         {
    //             text: 'Dashboard',
    //             path: '/'
    //         },

    //     ]
    // },
    {
        name: 'Clients',
        icon: SwitchAccountIcon,
        children: [
            {
                text: 'All Users',
                path: '/users'
            },


        ]
    },
    {
        name: 'Work Out Plans',
        icon: CategoryIcon,
        children: [
            {
                text: 'plan',
                path: '/workoutplan'
            },
            {
                text: 'New',
                path: '/items/category'
            },

        ]
    },
    {
        name: 'Languages',
        icon: LanguageIcon,
        children: [
            {
                text: 'New',
                path: '/sales/customers'
            },
            {
                text: 'List',
                path: '/sales/salesorders'
            },

        ]
    },
    {
        name: 'Videos',
        icon: VideoLibraryIcon,
        children: [
            {
                text: "Vendors",
                path: '/purchases/vendors'
            },
            {
                text: "Expences",
                path: '/purchases/expences'
            },
            {
                text: "Purchases Orders",
                path: '/purchases/purchaseorders'
            },
            {
                text: "Bills",
                path: '/purchases/bills'
            },
        ]
    },

    {
        name: 'Payments',
        icon: PaidIcon,
        children: [
            {
                text: 'Manual Journals',
                path: '/account/manualjournals'
            },
            {
                text: 'Chart Of Accounts',
                path: '/account/chartofaccounts'
            },
        ]
    },
    {
        name: 'Settings',
        icon: SettingsIcon,
        children: [
            {
                text: "Reset Password",
                path: '/resetpassword'
            },
            {
                text: "Logout",
                path: '/logout'
            },
        ]
    },

]