import {StyleSheet, Text, View} from 'react-native'
import React, {memo, useCallback, useEffect, useState} from 'react'
import {useHttp} from '../../customHooks'
import {useDispatch, useSelector} from 'react-redux'
import {hide, show} from '../../redux/reducers/spinner'
import {CardsSection, ListeningHeader} from '..'
import {FONTS, commonStyles} from '../../constants/theme'
import {showToastMsg} from '../../helper'

const PopularMoviesSection = () => {
  const {popularMovies} = useHttp()
  const [popularMoviesList, setpopularMoviesList] = useState([])
  // const oldDataListOfMovies = useSelector(x => x.searchHistory.results)
  const oldDataListOfMovies = [
    {
      "#TITLE": "Niram",
      "#YEAR": 1999,
      "#IMDB_ID": "tt0255426",
      "#RANK": 180522,
      "#ACTORS": "Kunchacko Boban, Shalini",
      "#AKA": "Niram (1999) ",
      "#IMDB_URL": "https://imdb.com/title/tt0255426",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0255426&rhash=77ed0696a538f4",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BOTYwYTRiZTctZjU2NC00ZTRkLWExYTUtODU1NTBhMzU1MzM4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
      "photo_width": 600,
      "photo_height": 750
    },
    {
      "#TITLE": "Varumayin Niram Sigappu",
      "#YEAR": 1980,
      "#IMDB_ID": "tt0155329",
      "#RANK": 170438,
      "#ACTORS": "Kamal Haasan, Sridevi",
      "#AKA": "Varumayin Niram Sigappu (1980) ",
      "#IMDB_URL": "https://imdb.com/title/tt0155329",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0155329&rhash=77ed0696a538f4",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BOTRlYjJhMTItY2FlOC00ZDc3LWIwNTctMTI2YTFmODFkZWUzXkEyXkFqcGdeQXVyOTIzODUxMjk@._V1_.jpg",
      "photo_width": 703,
      "photo_height": 1100
    },
    {
      "#TITLE": "Niram",
      "#YEAR": 2006,
      "#IMDB_ID": "tt13667402",
      "#RANK": 806207,
      "#ACTORS": "Mani, Sindhuri",
      "#AKA": "Niram (2006) ",
      "#IMDB_URL": "https://imdb.com/title/tt13667402",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt13667402&rhash=77ed0696a538f4"
    },
    {
      "#TITLE": "Niram Maratha Pookal",
      "#YEAR": 2017,
      "#IMDB_ID": "tt10305878",
      "#RANK": 488562,
      "#ACTORS": "Mohammad Azeem, Snisha Chandran",
      "#AKA": "Niram Maratha Pookal (2017) ",
      "#IMDB_URL": "https://imdb.com/title/tt10305878",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt10305878&rhash=77ed0696a538f4",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BNTJlMDIwNjMtNmZlOC00YmU3LTkzZDItMjc0ODE5YmY0YzA1XkEyXkFqcGdeQXVyODE1OTg3NDc@._V1_.jpg",
      "photo_width": 852,
      "photo_height": 1280
    },
    {
      "#TITLE": "Niram Maaratha Pookkal",
      "#YEAR": 1979,
      "#IMDB_ID": "tt0155917",
      "#RANK": 619072,
      "#ACTORS": "Rati Agnihotri, Radhika Sarathkumar",
      "#AKA": "Niram Maaratha Pookkal (1979) ",
      "#IMDB_URL": "https://imdb.com/title/tt0155917",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt0155917&rhash=77ed0696a538f4",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BOTI3NzI3MjUtZGY4Yy00ODU0LTg3OTMtNWYyOWI5MWIzNjdiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "photo_width": 491,
      "photo_height": 647
    },
    {
      "#TITLE": "Akashathinte Niram",
      "#YEAR": 2012,
      "#IMDB_ID": "tt2186717",
      "#RANK": 647557,
      "#ACTORS": "Govardhan B.K, Master Govardhan",
      "#AKA": "Akashathinte Niram (2012) ",
      "#IMDB_URL": "https://imdb.com/title/tt2186717",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt2186717&rhash=77ed0696a538f4",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BMTZjMTRiYTYtNWYyMS00OTE1LTljNzEtMDBjZTIyNWZjYmIwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      "photo_width": 720,
      "photo_height": 961
    },
    {
      "#TITLE": "Oru Puthu Niram",
      "#YEAR": 2020,
      "#IMDB_ID": "tt13048024",
      "#RANK": 801242,
      "#ACTORS": "Santhy Das, Gibu George",
      "#AKA": "Oru Puthu Niram (2020) ",
      "#IMDB_URL": "https://imdb.com/title/tt13048024",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt13048024&rhash=77ed0696a538f4",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BMDQ1MDcxNzYtYjQ1My00NzZiLWJlMDEtMDBiNGE4MjY4Y2JmXkEyXkFqcGdeQXVyMTI0MDM2NjIw._V1_.jpg",
      "photo_width": 2641,
      "photo_height": 3962
    },
    {
      "#TITLE": "Niram Maarum Kadhal",
      "#YEAR": 2023,
      "#IMDB_ID": "tt28184987",
      "#RANK": 1188113,
      "#ACTORS": "Preetha, Aravind Seiju",
      "#AKA": "Niram Maarum Kadhal (2023) ",
      "#IMDB_URL": "https://imdb.com/title/tt28184987",
      "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt28184987&rhash=77ed0696a538f4",
      "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BNGQ0YjRkNmUtZGRjNS00ZjI3LTg5ZTMtYTQ0OGYxNzQ5NDQ5XkEyXkFqcGdeQXVyMTU3NDgzNzM4._V1_.jpg",
      "photo_width": 648,
      "photo_height": 867
    }
  ];
  useEffect(() => {
    if (oldDataListOfMovies.length) {
      setpopularMoviesList([...oldDataListOfMovies])
      return;
    }
    gettingData()
  }, [])
  const gettingData = useCallback(async () => {
    const res = await popularMovies()
    let arr = res?.data?.description || []
    if (arr.length > 0 && arr.length > 10) arr.length = 10
    setpopularMoviesList([...arr])
  }, [])
  return (
    <View style={[commonStyles.fillFullScreen]}>
      <ListeningHeader val={'Popular Movies Section'} />
      <CardsSection data={popularMoviesList} />
    </View>
  )
}

export default memo(PopularMoviesSection)

const styles = StyleSheet.create({})
