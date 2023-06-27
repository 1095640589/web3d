import axios from 'axios'

import sunIcon from '@img/weather/icon_sun.png' //晴
import rainIcon from '@img/weather/icon_rain.png' //雨
import snowIcon from '@img/weather/icon_snow.png' //雪
import cloudyIcon from '@img/weather/icon_cloudy.png' //多云
import fogIcon from '@img/weather/icon_fog.png' //雾
import thunderstormIcon from '@img/weather/icon_thunderstorm.png' //雷暴
import smogIcon from '@img/weather/icon_smog.png' //雾霾
import hailIcon from '@img/weather/icon_hail.png' //冰雹

const url = 'https://devapi.qweather.com/v7/weather/now'
const location = '101020100' //上海
const key = '4eab79008eda4df3ab2f19aadfb40a21'

/*
 * 用的和风天气的api
 * location 为城市id
 * 国内城市id https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv
 * */
export async function getWeather() {
  const params = {
    location,
    key
  }
  return new Promise(async reslove => {
    axios.get(url, { params }).then(res => {
      // console.log(res)
      reslove(res.data.now)
    })
  })
}

/*
 * 获取城市id
 * */
// function getCityId() {
//   const url = 'https://geoapi.qweather.com/v2/city/top'
// }

/*
 *  weather string
 * */
export function getWeatherIcon(weather) {
  let icon
  switch (weather) {
    case '晴':
      icon = sunIcon
      break
    case '晴朗':
      icon = sunIcon
      break
    case '阴':
      icon = cloudyIcon
      break
    case '雨':
      icon = rainIcon
      break
    case '大雨':
      icon = rainIcon
      break
    case '中雨':
      icon = rainIcon
      break
    case '小雨':
      icon = rainIcon
      break
    case '雪':
      icon = snowIcon
      break
    case '大雪':
      icon = snowIcon
      break
    case '中雪':
      icon = snowIcon
      break
    case '小雪':
      icon = snowIcon
      break
    case '多云':
      icon = cloudyIcon
      break
    case '雾':
      icon = fogIcon
      break
    case '雾霾':
      icon = smogIcon
      break
    case '雷暴':
      icon = thunderstormIcon
      break
    case '冰雹':
      icon = hailIcon
      break
  }
  return icon
}

// export { getWeather, getWeatherIcon }
