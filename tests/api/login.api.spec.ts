import {test, expect} from '@playwright/test'

test('API: Validate login endpoint', async({request})=>{

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data:{
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.userId).toBe(1);
})