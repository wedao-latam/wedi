/* Copyright (c) 2023, Circle Technologies, LLC. All rights reserved.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
*/

import { NextResponse } from 'next/server';

export async function GET(request) {
    const requestHeaders = new Headers(request.headers);
    const userTokenFromHeader = requestHeaders.get('x-user-token');

    try {
        console.log("Getting wallets...")
        // Get challenge id
        const res = await fetch(process.env.CIRCLE_BASE_URL + '/wallets', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.CIRCLE_API_KEY}`,
                'Content-Type': 'application/json',
                'X-User-Token': userTokenFromHeader,
                'User-Agent': 'PW-TEST-SERVER',
            },
        });

        const data = await res.json();
        console.log(data)

        if(data['code']) {
            return NextResponse.json(data, { status: 500 })
        }

        return NextResponse.json(data['data']['wallets']);
    } catch (e) {
        console.log(e);
        return NextResponse.json(e, { status: 500 });
    }

}