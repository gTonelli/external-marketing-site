'use client'

// Documentation: https://bitbucket.org/growtham/gam-user-analytics-v2/src/main/
// core
import { useEffect } from 'react'
// libraries
import Cookies from 'universal-cookie'
// modules
import Mixpanel from './Mixpanel'
import { Storage } from './Storage'
// utils
import { TStyle } from '@/utils/types'

var gamUserTracking: TGAM | undefined

interface ISetUserDataArgs {
  email: string
  firstName: string
  lastName?: string
  phone?: string
  userStyle?: TStyle
}

export const useGamAnalytics = () => {
  const cookies = new Cookies()

  // Creating an identity of user in mixpanel
  const setUserData = ({ email, firstName, lastName, phone, userStyle }: ISetUserDataArgs) => {
    Mixpanel.setUser(email)

    Storage.set('lastUserEmail', email)
    Storage.set('userFirstName', firstName)
    Storage.set('userLastName', lastName)
    Storage.set('userFullName', `${firstName} ${lastName}`)
    if (phone) Storage.set('userPhone', phone)

    cookies.set('firstName', firstName)

    const { gamLastTouchData, gamFirstTouchData } = getUserData()

    Mixpanel.setPeople(gamLastTouchData)
    Mixpanel.setPeopleOnce(gamFirstTouchData)
    if (userStyle) Mixpanel.setPeople({ 'Attachment Style': userStyle })

    return { gamLastTouchData, gamFirstTouchData }
  }

  const getUserData = () => {
    // Setting up the first touch of the user
    const gamFirstTouchData = {
      utm_campaign_first: gamUserTracking?.utm_campaign_first,
      utm_medium_first: gamUserTracking?.utm_medium_first,
      utm_source_first: gamUserTracking?.utm_source_first,
      utm_content_first: gamUserTracking?.utm_content_first,
      utm_term_first: gamUserTracking?.utm_term_first,
      wicked_source_first: gamUserTracking?.wickedsource_first,
      wicked_id_first: gamUserTracking?.wickedid_first,
    }

    // Setting up the last touch of the user
    const gamLastTouchData = {
      utm_campaign_last: gamUserTracking?.utm_campaign_last,
      utm_medium_last: gamUserTracking?.utm_medium_last,
      utm_source_last: gamUserTracking?.utm_source_last,
      utm_content_last: gamUserTracking?.utm_content_last,
      utm_term_last: gamUserTracking?.utm_term_last,
      wicked_source_last: gamUserTracking?.wickedsource_last,
      wicked_id_last: gamUserTracking?.wickedid_last,
    }

    return { gamFirstTouchData, gamLastTouchData }
  }

  useEffect(() => {
    const gam = {
      internalConfig: {
        sessionLength: 30, // minutes
      },
      config: {
        debug: false,
        cookieExpiry: 365, // sets the cookie expiry in days
        topDomain: 'personaldevelopmentschool.com',
        disallowLocalStorage: false,
        urlParams: [
          'utm_source',
          'utm_medium',
          'utm_campaign',
          'utm_content',
          'utm_term',
          'wickedsource',
          'wickedid',
        ],
        urlDecorator: {
          decorateOnOwnDomain: false,
          // use only host names
          urlsToDecorate: ['personaldevelopmentschool.com'],
          // variables you want to pass from the current site url to the decorated urls
          queryParams: [
            'gclid',
            'fbclid',
            'msclkid',
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_content',
            'utm_term',
          ],
        },
      },
      executed: false,
      geoExecuted: false,
      getParameterByName(name: string) {
        const _name = name.toLowerCase().replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
        const regex = new RegExp('[\\?&]' + _name + '=([^&#]*)')
        const location = window.location.search || window.location.hash
        const results = regex.exec(location.toLowerCase())
        if (results) {
          return decodeURIComponent(results[1].replace(/\+/g, ' '))
        }
      },
      addToStorage(key: any, val: any, onlyLocalStorage?: any) {
        let fromStorage = gam.getObjectFromStorage('gam_user_tracking')
        if (typeof fromStorage === 'string') {
          fromStorage = JSON.parse(fromStorage)
        }
        const json = fromStorage
        json[key] = val
        const data = JSON.stringify(json)
        if (
          !gam.config.disallowLocalStorage &&
          typeof localStorage !== 'undefined' &&
          localStorage
        ) {
          localStorage.setItem('gam_user_tracking', data)
        }
        if (!onlyLocalStorage) {
          const expiry = new Date()
          expiry.setTime(expiry.getTime() + 86400000 * gam.config.cookieExpiry)
          document.cookie =
            'gam_user_tracking=' +
            window.escape(data) +
            '; expires=' +
            expiry.toUTCString() + // #NOTE: was originally: `expiry.toGMTString()` which is now deprecated
            '; path=/;' +
            (gam.config.topDomain ? ' domain=' + gam.config.topDomain + ';' : '')
        }
      },
      removeFromStorage(key: string) {
        gam.addToStorage(key, '')
      },
      getObjectFromStorage(key: string) {
        const hasLocalStorage =
            !gam.config.disallowLocalStorage && typeof localStorage !== 'undefined' && localStorage,
          localStorageData = hasLocalStorage
            ? JSON.parse(localStorage.getItem(key) || 'null')
            : null,
          cookieData: any = gam.readCookie(key)
        if (!localStorageData && !cookieData) {
          return '{}'
        }
        if (localStorageData && !cookieData) {
          return localStorageData
        }
        if (cookieData && !localStorageData) {
          return cookieData
        }
        if (
          hasLocalStorage &&
          (typeof localStorageData?.first_visit_time === 'undefined' ||
            typeof cookieData?.first_visit_time === 'undefined' ||
            localStorageData.first_visit_time <= cookieData.first_visit_time)
        ) {
          return localStorageData
        }
        return cookieData
      },
      readCookie(name: string) {
        const nameEQ = name + '=',
          ca = document.cookie.split(';')
        // for (let i = 0; i < ca.length; i++) {    // #DEV: old ways
        for (const el of ca) {
          let c = el
          while (c.startsWith(' ')) {
            c = c.substring(1, c.length)
          }
          if (c.startsWith(nameEQ)) {
            return window.unescape(c.substring(nameEQ.length, c.length))
          }
        }
      },
      storeUrlParams(gamUserTracking: any, referrer: any) {
        if (!referrer) {
          let hasParams = false
          for (const el of gam.config.urlParams) {
            if (typeof gam.getParameterByName(el) !== 'undefined') {
              hasParams = true
              break
            }
          }
          if (!hasParams) return
        }
        const hasFirst = typeof gamUserTracking.hasFirst !== 'undefined'
        gam.config.urlParams.forEach(function (urlParam) {
          let value = gam.getParameterByName(urlParam)
          if (typeof value === 'undefined') {
            value = ''
          }
          if (
            urlParam == 'utm_source' &&
            !value &&
            referrer &&
            (!gam.config.topDomain || !(referrer.indexOf(gam.config.topDomain) > -1))
          ) {
            value = referrer
          }
          if (!hasFirst && value) {
            gam.addToStorage(urlParam + '_first', value)
          }
          if (value) {
            gam.addToStorage(urlParam + '_last', value)
          }
        })
        if (!hasFirst) {
          gam.addToStorage('hasFirst', true)
        }
      },
      resolveUserId(gamUserTracking: any) {
        let user_id = gamUserTracking.user_id
        if (!user_id) {
          user_id = gam.getParameterByName('user_id')
        }
        return user_id
      },
      decorateUrl(url: string) {
        let _url = url
        const collectedParams: string[] = []
        gam.config.urlParams.forEach(function (urlParam) {
          if (gamUserTracking?.[urlParam + '_last']) {
            collectedParams.push(
              urlParam + '=' + encodeURIComponent(gamUserTracking[urlParam + '_last'])
            )
          }
        })
        gam.config.urlDecorator.queryParams.forEach(function (queryParam) {
          const queryParamValue = gam.getQueryParam(queryParam)
          if (queryParamValue) {
            collectedParams.push(queryParam + '=' + encodeURIComponent(queryParamValue))
          }
        })
        if (collectedParams.length) {
          let hash = ''
          const hashIndex = _url.indexOf('#')
          if (hashIndex !== -1) {
            hash = _url.substr(hashIndex)
            _url = _url.substr(0, hashIndex)
          }
          return _url + (_url.indexOf('?') === -1 ? '?' : '&') + collectedParams.join('&') + hash
        }
        return _url
      },
      // borrowed from https://stackoverflow.com/questions/831030/
      getQueryParam(name: string) {
        const _name = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)').exec(
          window.location.search || window.location.hash
        )
        if (_name) {
          return decodeURIComponent(_name[1])
        }
      },
    }
    const gamExecInterval = setInterval(function () {
      if (typeof gam.config === 'undefined') return
      clearInterval(gamExecInterval)
      // populate local storage data with the cookie data, since we are now supporting cross domain cookies
      if (gam.config.topDomain && !gam.config.disallowLocalStorage) {
        const cookieDataRaw = gam.readCookie('gam_user_tracking')
        let cookieData
        if (cookieDataRaw) {
          cookieData = JSON.parse(cookieDataRaw)
          for (const key in cookieData) {
            gam.addToStorage(key, cookieData[key], true)
          }
        }
      }
      // user tracking routine
      gamUserTracking = gam.getObjectFromStorage('gam_user_tracking')
      let referrer = ''
      if (document.referrer) {
        if (new URL(document.referrer).hostname !== window.location.hostname) {
          referrer = document.referrer.replace(new RegExp(window.location.protocol + '//'), '')
        }
      } else {
        referrer = ''
      }
      if (typeof referrer !== 'undefined') {
        gam.addToStorage('referrer', referrer)
      }
      gam.storeUrlParams(gamUserTracking, typeof referrer !== 'undefined' ? referrer : '')
      const xmlHttp = new XMLHttpRequest()
      if (
        typeof gamUserTracking?.lastGeo === 'undefined' ||
        Date.now() - gamUserTracking.lastGeo > 86400000
      ) {
        xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
              const data = JSON.parse(xmlHttp.responseText)
              gam.addToStorage('country', data.country)
              gam.addToStorage('city', data.city)
              gam.addToStorage('ip', data.query)
              gam.addToStorage('lastGeo', Date.now())
            }
            gam.geoExecuted = true
          }
        }
        xmlHttp.open('GET', 'https://extreme-ip-lookup.com/json/', true)
        xmlHttp.send(null)
      } else {
        gam.geoExecuted = false
      }
      if (!gamUserTracking?.landing_page_first) {
        gam.addToStorage('landing_page_first', window.location.pathname)
      }
      if (
        !gamUserTracking?.last_visit_time ||
        Date.now() - Date.parse(gamUserTracking.last_visit_time) >
          gam.internalConfig.sessionLength * 60000
      ) {
        gam.addToStorage('landing_page_last', window.location.pathname)
      }
      gam.addToStorage('last_page_seen', window.location.pathname)
      if (!gamUserTracking?.first_visit_time) {
        gam.addToStorage('first_visit_time', new Date())
      }
      gam.addToStorage('last_visit_time', new Date())
      gam.addToStorage('pageviews', gamUserTracking?.pageviews ? gamUserTracking.pageviews + 1 : 1)
      gam.addToStorage('user_agent', navigator.userAgent)
      const ga_cid = gam.readCookie('_ga')
      gam.addToStorage('ga_cid', typeof ga_cid !== 'undefined' ? ga_cid : '')
      // refresh the variable
      gamUserTracking = gam.getObjectFromStorage('gam_user_tracking')
      // insert the values into the main gam variable as well
      for (const key in gamUserTracking) {
        // @ts-ignore
        if (typeof gam[key] === 'function' || key === 'internalConfig') {
          throw 'GAM: Invalid cookie key: ' + key
        }
        // @ts-ignore
        gam[key] = gamUserTracking[key]
      }
      // url decorator
      if (gam.config.urlDecorator.urlsToDecorate && gam.config.urlDecorator.urlsToDecorate.length) {
        const links = document.querySelectorAll('a[href]')
        if (links.length) {
          for (const el of gam.config.urlDecorator.urlsToDecorate) {
            const urlToDecorate = el.replace(/^http(s|):\/\/|\/+$|(\/|)\?.*/gi, '')
            let urlToDecorateObj = new URL('https://' + urlToDecorate)
            try {
              urlToDecorateObj = new URL('https://' + urlToDecorate)
            } catch (e) {
              continue
            }
            // for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {    // #DEV: old ways
            for (const el in links) {
              // @ts-ignore
              const link = el.href
              let linkObj
              try {
                linkObj = new URL(link)
              } catch (e) {
                continue
              }
              if (
                linkObj.host === urlToDecorateObj.host &&
                (gam.config.urlDecorator.decorateOnOwnDomain ||
                  linkObj.host !== window.location.host)
              ) {
                // @ts-ignore
                el.href = gam.decorateUrl(link)
              }
            }
          }
        }
      }
      gam.executed = true
    }, 100)
  }, [])

  return { gamUserTracking, setUserData, getUserData }
}

type TGAM = {
  city: string
  country: string
  first_visit_time: string
  ga_cid: string
  hasFirst: boolean
  ip: string
  landing_page_first: string
  landing_page_last: string
  lastGeo: number
  last_page_seen: string
  last_visit_time: string
  pageviews: number
  referrer: string
  user_agent: string
  utm_content_first: string
  utm_content_last: string
  utm_medium_first: string
  utm_medium_last: string
  utm_source_first: string
  utm_source_last: string
  [key: string]: any
}
