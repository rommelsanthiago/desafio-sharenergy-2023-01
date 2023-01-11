export type User = {
    username: string,
    password: string
}

export type Target = {
    name: string,
    value: string
}

export type IRandomUserResponse = {
    results: {
        gender: 'male' | 'female',
        name: {
            title: string,
            first: string,
            last: string,
        },
        location: {
            street: {
                number: number,
                name: string,
            },
            city: string,
            state: string,
            country: string,
            postcode: string,
            coordinates: {
                latitude: string,
                longitude: string,
            },
            timezone: {
                offset: string,
                description: string
            },
        },
        email: string,
        login: {
            uuid: string,
            username: string,
            password: string,
            salt: string,
            md5: string,
            sha1: string,
            sha256: string,
        },
        dob: {
            date: string,
            age: number,
        },
        registered: {
            date: string,
            age: number,
        },
        phone: string,
        cell: string,
        id: {
            name: string,
            value: string,
        },
        picture: {
            large: string,
            medium: string,
            thumbnail: string,
        },
        nat: string,
    }[],
    info: {
        seed: string,
        results: number,
        page: number,
        version: string,
    },
};

export type IRandomUser = {
    user: {
        name: {
            title: string,
            first: string,
            last: string,
        },
        registered: {
            date: string,
            age: number,
        },
        email: string,
        picture: {
            large: string,
            medium: string,
            thumbnail: string,
        },
        login: {
            uuid: string,
            username: string,
            password: string,
            salt: string,
            md5: string,
            sha1: string,
            sha256: string,
        },
    }
}
