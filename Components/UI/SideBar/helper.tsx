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

    {
        name: 'Dashboard',
        icon: SpaceDashboardIcon,
        children: [
            {
                text: 'Dashboard',
                path: '/'
            },

        ]
    },
    {
        name: 'Plans',
        icon: CategoryIcon,
        children: [
            {
                text: 'Category',
                path: '/items/category'
            },
            {
                text: 'Sub Category',
                path: '/items/subcategory'
            },
            {
                text: 'Product',
                path: '/items/products'
            },
        ]
    },
    {
        name: 'Languages',
        icon: LanguageIcon,
        children: [
            {
                text: 'Customers',
                path: '/sales/customers'
            },
            {
                text: 'Sales Orders',
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
        name: 'Clients',
        icon: SwitchAccountIcon,
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