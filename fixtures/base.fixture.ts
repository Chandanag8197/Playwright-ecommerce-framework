import {test as base } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type MyFixtures ={
    inventoryPage: InventoryPage
    cartPage : CartPage
}

export const test = base.extend <MyFixtures>({

    inventoryPage: async ({page}, use) =>{
        await use(new InventoryPage(page))
    },

    cartPage: async ({page}, use)=>{
        await use(new CartPage(page))
    }
})

export const expect = base.expect