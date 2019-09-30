export default class BookstoreService {
    data = [
        {
            id: 1,
            title: "Production-Ready Microservices",
            author: "Susan J. Fowler",
            price: 32,
            coverImage: "https://cdn.eksmo.ru/v2/ITD000000000311580/COVER/cover1__w600.jpg"
        },
        {
            id: 2,
            title: "Release It!",
            author: "Michael T. Nygard",
            price: 45,
            coverImage: "https://cdn.eksmo.ru/v2/ITD000000000849160/COVER/cover1__w600.jpg"
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if (Math.random() > 0.75) {
                    reject(new Error("Something bad happened"));
                }
                resolve(this.data);
            }, 700);
        });
    }
}