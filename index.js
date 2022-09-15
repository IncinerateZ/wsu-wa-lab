const movies = [
    {
        title: 'Squid Game',
        tags: ['Korean', 'Drama', 'Thriller', 'Survival', 'Action', 'Mystery'],
        description:
            "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
        poster: '/src/squidgameposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi2427699993/1434659607842-pgv4ql-1631100525843.mp4?Expires=1663306602&Signature=pnl~4BrhLrUm6x4nto94TWVmEOz10~O7WaT10AYl5AZwHZ71~vQ8-3jjK-viXzzaqem1x~~Ii1~yf1Sop1uif57SbpGHk3f-xw6ZK5sgjp16khB64qYfgDczimkztPTn77oItM9K4uVac3VA2YS82nVJwdqxB6ryMA8eGyrQ29C~p9xEoYdvoc2Uy6fuY-xecGt1wse8ZyucyHYRzeBTa0gXEtnJJZZsiYTysBvjE39ATY~Hk-MP3RXQgTFy2xAgLN0tgDi6g27AJo-JH7Tf0W8oMNwH7w4tpQEwWlpGqRcAd2BuB-PzO3PUdDu9yX4KRSnNXQS4WyYSeDxW4hHz0Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Parasite',
        tags: ['Korean', 'Comedy', 'Drama', 'Thriller'],
        description:
            'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        poster: '/src/parasiteposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi1015463705/1434659607842-pgv4ql-1606954080073.mp4?Expires=1663313435&Signature=L2XcExAi2iWIq7ffzjHzXd9Mkf9dPoDb8D~~smuFgK11~LZQwVbGrRf5Lf2q63wzGxjgJbQEIVwAIbobsBAE2sHWKvHDp6xvdp0lvPcLaM-EUGAavpymOFnTcJU3yVy5QNR9Bg9WLNbFGJ1iYQD9gc52w9pDC9PIk6dE6X8ABGAsykg52uNY22SLqM6gnV2K3VLh3My95GYy-Jhi~vfgVenVmza8Z9PlIrUUK9RgXUnZi~6ZNQ7FIVIcbe~DAoub2XcyB4ghfao55mM0ZO5UDnRzqwDr1~c-h5FirzTWdCE7FgyyMhEstI4tvydhdvr~jGp8-Cw4Fx5chmcizPBTlA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Moscow Does Not Believe in Tears',
        tags: ['Russian', 'Comedy', 'Drama', 'Romance'],
        description:
            'Three young provincial women come to Moscow in search of what people in all the capitals of the world are looking for - love, happiness and prosperity. Their destinies develop exactly as the character of each of the girls suggests.',
        poster: '/src/moscowposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi3314795033/1434659607842-pgv4ql-1650990085681.mp4?Expires=1663314087&Signature=oNFyuG-iD2NEID8LGZfDs1lF9vmhKrKtzziTC-ekEcxClR2em4VEvhoUaWTRSAQoVJBL2wAwJEEwM405pj6T5Z~mrqqm8ViwHz5xriTNVXuJU4HnUW2Cpv8THdQIDFwr6mDz~HJTRxdKu-EnFWEB99j~S2cuxD1Ap0O~PNwJibHmzftyc7P1QdvNLrzCqiluNSMSrDPCjezB1mYLGyRmQJ72MQ8b0E6mBwNI-mFTdHpviZlNLpEtTSxX~Q4OXqn4~bJc4cVeHP7RVtZnhBXPTmIydogQWOUlPmgwgHksTlSotDmlPx6jDjPJI1k7z6VIQ8HyZbgOKTPHr4KAQFxK-w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Mirror',
        tags: ['Russian', 'Biography', 'Drama'],
        description:
            'A dying man in his forties remembers his past. His childhood, his mother, the war, personal moments and things that tell of the recent history of all the Russian nation.',
        poster: '/src/mirrorposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi1570226969/1434659607842-pgv4ql-1633638588769.mp4?Expires=1663314239&Signature=ET4-kkX6Lg50GI1YI~cLeVd3REDwEamokqBsdCtjGkuKn~8bZgwDFVL9SGZvwk59Wr9LkdCwzbZpWW2vDltdM5ywt~I7b4-KowISVX~RIhsLfBIJgiMnKHJQrmXT8Q7bR9Uhnmdwvn7ij4eQwQBoFLWV6h5eJWjV655HXQfPU6Jbj~4AZBRyCEqpng0G90hehBumKhaVJ9x-1jTc1pGP7g77npXo24wfV3k-kshBcjUcpYvs1BCIOOdKZdkGl7Y6gQ99aI41f4YfMj-nIelYmvRv6Wls7-W7aCZqZRjlcBoh2Px66tzs9KEctoc9rE2ydNqIIf4MYwV01DtQW8WNsA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Dilan 1990',
        tags: ['Indonesian', 'Romance', 'Drama'],
        description:
            'Milea (Vanesha Prescilla) met with Dilan (Iqbaal Ramadhan) at a high school in Bandung in 1990. An unusual introduction brings Milea to know the uniqueness of Dilan who is smart, kind, and romantic in her eyes.',
        poster: '/src/dilanposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi895795993/1434659607842-pgv4ql-1645623126623.mp4?Expires=1663314359&Signature=LLHDkQhYyA~EocRwOylvjcZvGS11NIwXfA1rSFQEm5LWunXHMz5F93rPROzFFUrqzPtnHz-2Wk-pk7OIpE9S5Evqt2N3vZ0Mcm-e2aWK-uIe~BfJR426zadqi8yOV0D2VuZfTEO~Hu2~HlP2BXXTKt4VcUTVFK1-2QYTqZUX0kFO4KLhWMiAz70RCYkpaelh7qo5yfGGcn5wxRON6ngPYICQK01j~Sj5rYhkRsKRPRJsP16pMaaezP6NPhOYKiiIf~aH3~3FKpYZegKV6Hrm1jdbKi4j4GVU7JYgNmzuJsSY7EcTI0QNVHOahaKB8OK4ATJ693fRDfSUrRBifk7Ikw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Habibi & Ainun',
        tags: ['Indonesian', 'Romance', 'Drama', 'Biography'],
        description:
            'This movie is based on the memoir written by the 3rd President of Indonesia and one of the world-famous engineer, B.J. Habibie about his wife, Hasri Ainun Habibie.',
        poster: '/src/habibiposter.jpg',
        trailer:
            'https://rr3---sn-a5msenll.googlevideo.com/videoplayback?expire=1663250516&ei=9NsiY9iYHpmFhwbD-a_gCw&ip=154.38.39.134&id=o-ANcNBjTPYX3sd_WyW-O5H2VnWRqs1KSxfTRjKkQCHsBb&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=th8w9h8IuNL77sxUtFhsCikH&gir=yes&clen=8208290&ratebypass=yes&dur=155.480&lmt=1497945092691394&fexp=24001373,24007246&c=WEB&rbqsm=fr&n=YRaZYi_7VzdsRGZxx&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgbwFvhTFZGxs8zyPaqr1hBz61V0MpcbEncuZIFwBdKcYCIQCqWKgA55NxYnD-gCJ_oyt_xSasR19Y4Fp-EIu9L26ccA%3D%3D&redirect_counter=1&cm2rm=sn-p5qe7r7e&req_id=310ff3f7b0b5a3ee&cms_redirect=yes&cmsv=e&mh=cc&mip=118.128.217.208&mm=34&mn=sn-a5msenll&ms=ltu&mt=1663228741&mv=u&mvi=3&pl=24&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOTQeLJ5cOJipGa_iBP7uo000JD56MxwL9J4zKUL5BAaAiBZ5Y1lkpfxSbb3tgftTpRDDgYuoXfP5ChIwddOgtS-JA%3D%3D',
    },
];

function arrToText(arr) {
    let res = '';
    for (let o of arr) {
        if (res.length > 0) res += ', ';
        res += o;
    }
    return res;
}

function addMovie(listEl, movie) {
    listEl.innerHTML += `<div class="movie-card"
            style="background-image: linear-gradient( rgba(0,0,0,.3), rgba(0,0,0,.3) ),url('${
                movie.poster
            }')"
            onmouseover="this.firstChild.nextSibling.play();"
            onmouseout="this.firstChild.nextSibling.pause(); this.firstChild.nextSibling.currentTime = 0;">
            <video
                src=${movie.trailer}></video>
            <div class="video-mask"></div>
            <div class="movie-desc">${movie.description}</div>
            <h2 class="movie-title">${movie.title}</h2>
            <div class="movie-tags">${arrToText(movie.tags)}</div>
        </div>`;
}

function editDistance(str1, str2) {
    const track = Array(str2.length + 1)
        .fill(null)
        .map(() => Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1,
                track[j - 1][i] + 1,
                track[j - 1][i - 1] + indicator,
            );
        }
    }
    return track[str2.length][str1.length];
}

function clearMovies(el) {
    el.innerHTML = '';
}

function initMovies(movieListEl) {
    for (let movie of movies) {
        addMovie(movieListEl, movie);
    }
}

window.onload = () => {
    console.log('Page Loaded');

    const movieListEl = document.getElementById('movies-list');
    const searchBarEl = document.getElementById('searchbar');
    searchBarEl.onkeyup = (e) => {
        let searchtext = searchBarEl.innerText;

        clearMovies(movieListEl);
        if (searchtext === '' || searchtext === 'SEARCH') {
            initMovies(movieListEl);
        } else {
            for (let movie of movies) {
                if (
                    movie.title.includes(searchtext) ||
                    editDistance(
                        movie.title.toLowerCase(),
                        searchtext.toLowerCase(),
                    ) <= 5
                )
                    addMovie(movieListEl, movie);
            }
        }
    };

    initMovies(movieListEl);
};

// 'moscow does not know lies', 'mirror'
