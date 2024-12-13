const data = [
    {
        id: 1,
        author: "Tony Stark",
        quote: "I am Iron Man.",
        photo: "tony_stark.jpg",
        publishDate: "2008-05-02",
        comments: [
            { comment: "Epic moment!" },
            { comment: "Iconic line." }
        ]
    },
    {
        id: 2,
        author: "Steve Rogers",
        quote: "I can do this all day.",
        photo: "steve_rogers.jpg",
        publishDate: "2011-07-22",
        comments: [
            { comment: "Never gets old." },
            { comment: "So inspiring!" }
        ]
    },
    {
        id: 3,
        author: "Thor",
        quote: "Bring me Thanos!",
        photo: "thor.jpg",
        publishDate: "2018-04-27",
        comments: [
            { comment: "Chills every time." },
            { comment: "Thor is the best!" }
        ]
    }
];

module.exports = { data };