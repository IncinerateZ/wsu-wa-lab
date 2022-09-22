const movies = [
    {
        title: 'Squid Game',
        tags: ['Korean', 'Drama', 'Thriller', 'Survival', 'Action', 'Mystery'],
        description:
            "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
        poster: '/src/squidgameposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi2427699993/1434659607842-pgv4ql-1631100525843.mp4?Expires=1663892733&Signature=V8K-lRqVcHsm-ypm8u1o2WS-4S~jyGjR5v3W5QlsAtJ-g5DZ6SKk1knRq9bNkSPU7uGNMppnQdDql~vn-un70dStBqhwSc0FkIIqcRSI5JhcvI0EK8QT2n29V2sTrJ14~AvaWLyPmaKlGF60eHegxItlR-18q2R8Mf3~mGCGMBax02QyeUqNa4wMDTojz3dHVhTbUhRumjieT1mc7BWY8VT5BWBvdV5fmui9mV2frx-Ix6EXlhwuTLwME1tO~nM2aTdo0aHq27GHOieIasUQsDrmY0BH1~UZqM6yyCE9LkD4jCgL0jIFsEFQxwhyfQ99Qvnx6ztGCFdwTm-hgH9gJg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Parasite',
        tags: ['Korean', 'Comedy', 'Drama', 'Thriller'],
        description:
            'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        poster: '/src/parasiteposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi1015463705/1434659607842-pgv4ql-1606954080073.mp4?Expires=1663892851&Signature=EJQW9XMUzGuoobG~HZD9Be82fI8R8O2e8f4WRTHRrPxZ1KzBiOSn-50hbnfL~v0c9dwbQ9~Q9r3Jp1Uj3SsRmZ9EDm9x6RBMVl6FbPqlFYlORj9b0Vk2fO3zbS55U9PngeCLxMMye~UWDDw~kKZK~5gwbsqKGlASn~dBaXHvx3oR8ELF6Zx6EOtaw0KNYrYXz6WKxVNhNFiv4QX4DmNV63liRvhbNWX0CBI01-EcOcWjxX-S2H0UdnKmmgAX5CuR-kkjxkOvS1TFRZXt~AWRbvKaF96XkE3k0jtRNwj5RDwCevrVdQhpUNI22BgF1ZbDI36LblTuYaRE52fBLuOGuQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Moscow Does Not Believe in Tears',
        tags: ['Russian', 'Comedy', 'Drama', 'Romance'],
        description:
            'Three young provincial women come to Moscow in search of what people in all the capitals of the world are looking for - love, happiness and prosperity. Their destinies develop exactly as the character of each of the girls suggests.',
        poster: '/src/moscowposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi3314795033/1434659607842-pgv4ql-1650990085681.mp4?Expires=1663892888&Signature=Mp5Ffn7ieDAAqhyi1FVOz~lHOj9is~PDFI4PcNbqtZO2YscocVDNPGOfLiVc78BERTsko2nTv380iN1ba9iKC7~VMTomIImytNWZm0bswgfcDAucLqtmDd-F37nK6pREui31mLl4HYYEn4qnVo-yETyTFihhm7s0~hBxNFvJuW1KM9HgsStLTFScU5u7yWDK1dmEuJIJIhzTiuq~tk4GYm5MTQJULiZJ~rzR5-5E4Pq9~ME1Jg3X0fnQZMNSlaOWTqO~4kjQfo9dgiLIz1gyLXmwBtEMPG13wvy9GjbOqd8DsnfJQ7LuLNJIiGbBXobx~EhQx~gIjhh-ekLVT-j1QA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Mirror',
        tags: ['Russian', 'Biography', 'Drama'],
        description:
            'A dying man in his forties remembers his past. His childhood, his mother, the war, personal moments and things that tell of the recent history of all the Russian nation.',
        poster: '/src/mirrorposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi1570226969/1434659607842-pgv4ql-1633638588769.mp4?Expires=1663892929&Signature=OBXY-B2Lr7DdNql9XmAIOP-U1t4GqX5vMs5ldMXF5D7K4Yi1a-XImqIn2TQhbQFwxLAb1p~e~Oe9epZQq7vmTuqU1U5PV4idt02usv0KqQKyD0DzAI37mS6Xi-W8Klduhtd1Kdt7T~yeRnf6djjOI~6m2a2AEnqe1ZawnqqEKB-IVnX~tmghdQN3DtejlMRklgMTuNVSPOIKOzaB4WXjd3K0FBlH9FflXx1M2SUTQyxGM-21QPJLBEaIHIXzBRADTQO9Yc1X8IIhhE2bEa3~vSN4mAODxc20ytpOKktgfgb7OOx8wrT7UVpCrTtc1VFQJNPUz79uWGqMxB612-eR7A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    },
    {
        title: 'Dilan 1990',
        tags: ['Indonesian', 'Romance', 'Drama'],
        description:
            'Milea (Vanesha Prescilla) met with Dilan (Iqbaal Ramadhan) at a high school in Bandung in 1990. An unusual introduction brings Milea to know the uniqueness of Dilan who is smart, kind, and romantic in her eyes.',
        poster: '/src/dilanposter.jpg',
        trailer:
            'https://imdb-video.media-imdb.com/vi895795993/1434659607842-pgv4ql-1645623126623.mp4?Expires=1663892985&Signature=YXe6V6zvd6rqlU7QKFRDSd5oj02cXG1KEl2sK-IgrOLmPDHU0vlF2n-ytgn4WvLKYy4eMYH7ZgbY4NPGrhkYG0tcFkPd4YBDdyEClDu2GAQQoDhPnnBlduGGEaWYPqoF6j71RS9kgtvkXWCLYkZa3beoSTsLyBa5fvTECWwsU5v8nolrEnnBz2OGTMLKTeiTFuXVJ0QyjLkyAfX-KGkp6aZMtZi0MYnl3j9l~n32nJUwHmih4zb7VTHmwfCnbCLT-W3nlN-u7qLEjGYKr9ZM6HDyCSjv6z~lTrgtwFhoDkaMwM3x~uJ8WSuDAiJ66DWG6qkwYM6RM29CR46MVS6cPQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
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
