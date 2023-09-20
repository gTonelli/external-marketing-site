//
// Documentation: https://bitbucket.org/growtham/gam-user-analytics-v2/src/main/

//
export let gamUserTracking: any
export const gam = {
  internalConfig: {
    sessionLength: 30, // minutes
  },
  init: () => {
    if (gam.config.debug) {
      console.info('Gam initialized')
    }
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
    if (!gam.config.disallowLocalStorage && typeof localStorage !== 'undefined' && localStorage) {
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
    if (gam.config.debug) {
      //   console.log('GAM: addToStorage: ' + key + ' => ' + val) // # DEV
    }
  },
  removeFromStorage(key: string) {
    gam.addToStorage(key, '')
  },
  getObjectFromStorage(key: string) {
    const hasLocalStorage =
        !gam.config.disallowLocalStorage && typeof localStorage !== 'undefined' && localStorage,
      localStorageData = hasLocalStorage ? JSON.parse(localStorage.getItem(key) || 'null') : null,
      cookieData: any = gam.readCookie(key)
    if (!localStorageData && !cookieData) {
      if (gam.config.debug) {
        // console.log('GAM: Get Storage: Storage is empty')// # DEV
      }
      return '{}'
    }
    if (localStorageData && !cookieData) {
      if (gam.config.debug) {
        // console.log('GAM: Get Storage: Local Storage')// # DEV
      }
      return localStorageData
    }
    if (cookieData && !localStorageData) {
      if (gam.config.debug) {
        // console.log('GAM: Get Storage: Cookie')// # DEV
      }
      return cookieData
    }
    // #NOTE: this entire statement is stupid and useless cuz both localStorageData & cookieData are pure strings so this is always false
    if (
      hasLocalStorage &&
      (typeof localStorageData?.first_visit_time === 'undefined' ||
        typeof cookieData?.first_visit_time === 'undefined' ||
        localStorageData.first_visit_time <= cookieData.first_visit_time)
    ) {
      if (gam.config.debug) {
        // console.log('GAM: Get Storage: Local Storage') // # DEV
      }
      return localStorageData
    }
    if (gam.config.debug) {
      //   console.log('GAM: Get Storage: Cookie')   // # DEV
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
      //   for (let i = 0; i < gam.config.urlParams.length; i++) { // #DEV: old ways
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
    if (gam.config.debug) {
      //   console.log('GAM: Setting user_id: ' + user_id)    // # DEV
    }
    return user_id
  },
  buildUrl: function () {
    const gamUserTracking = gam.getObjectFromStorage('gam_user_tracking'),
      anchors = document.querySelectorAll('a[href]')
    if (gamUserTracking) {
      // #NOTE: dunno what this is supposed to be cuz `urls` does not exist in JS and nowhere in the original script is this referenced ¯\_(ツ)_/¯
      //   for (const url of urls) {
      for (const anchor in anchors) {
        // @ts-ignore
        if (anchor.href.indexOf(url) === -1) continue
        const entries = Object.entries(JSON.parse(gamUserTracking))
        // @ts-ignore
        let queryString = anchor.href.indexOf('?') === -1 ? '?' : '&'
        //   for (let k = 0; k < entries.length; k++) { // #DEV: old ways
        for (const entry of entries) {
          const key = entry[0],
            value = entry[1]
          if (key.startsWith('utm')) {
            queryString += key + '=' + value + '&'
          }
        }
        queryString = queryString.substring(0, queryString.length - 1)
        // @ts-ignore
        anchor.href += queryString
      }
      //   }
    }
    // incomplete
  },
  decorateUrl(url: string) {
    let _url = url
    const collectedParams: string[] = []
    gam.config.urlParams.forEach(function (urlParam) {
      if (gamUserTracking[urlParam + '_last']) {
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
  populateFormFields(form: any) {
    form.find('input[name$="_gam"]').each(function () {
      // @ts-ignore
      const prop = jQuery(this).attr('name')?.replace(/_gam$/, '') || ''
      if (typeof gamUserTracking[prop] !== 'undefined') {
        // @ts-ignore
        jQuery(this).val(gamUserTracking[prop])
      }
    })
  },
}
export const gamExecInterval = setInterval(function () {
  if (typeof gam.config === 'undefined') return
  clearInterval(gamExecInterval)
  // populate local storage data with the cookie data, since we are now supporting cross domain cookies
  if (gam.config.topDomain && !gam.config.disallowLocalStorage) {
    const cookieDataRaw = gam.readCookie('gam_user_tracking')
    let cookieData
    if (cookieDataRaw) {
      cookieData = JSON.parse(cookieDataRaw)
      for (const key in cookieData) {
        if (gam.config.debug) {
          //   console.log(
          //     'GAM: Populating local storage with cookie data: ' + key + ' => ' + cookieData[key]
          //   ) // # DEV
        }
        gam.addToStorage(key, cookieData[key], true)
      }
    }
  }
  // user tracking routine
  gamUserTracking = gam.getObjectFromStorage('gam_user_tracking')
  if (gam.config.debug) {
    // console.log('GAM: gamUserTracking', gamUserTracking)    // # DEV
  }
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
    if (gam.config.debug) {
      //   console.log('GAM: Setting referrer to: ' + referrer)  // # DEV
    }
  } else if (gam.config.debug) {
    // console.log('GAM: Referrer is internal, not setting')   // # DEV
  }
  gam.storeUrlParams(gamUserTracking, typeof referrer !== 'undefined' ? referrer : '')
  const xmlHttp = new XMLHttpRequest()
  if (
    typeof gamUserTracking.lastGeo === 'undefined' ||
    Date.now() - gamUserTracking.lastGeo > 86400000
  ) {
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
          const data = JSON.parse(xmlHttp.responseText)
          gam.addToStorage('country', data.country)
          gam.addToStorage('city', data.city)
          gam.addToStorage('ip', data.query)
          if (gam.config.debug) {
            // console.log(data)   // # DEV
          }
          gam.addToStorage('lastGeo', Date.now())
        } else if (gam.config.debug) {
          //   console.log('GAM: IP Lookup failed', xmlHttp) // # DEV
        }
        gam.geoExecuted = true
      }
    }
    xmlHttp.open('GET', 'https://extreme-ip-lookup.com/json/', true)
    xmlHttp.send(null)
  } else {
    gam.geoExecuted = false
  }
  if (!gamUserTracking.landing_page_first) {
    gam.addToStorage('landing_page_first', window.location.pathname)
  }
  if (
    !gamUserTracking.last_visit_time ||
    Date.now() - Date.parse(gamUserTracking.last_visit_time) >
      gam.internalConfig.sessionLength * 60000
  ) {
    gam.addToStorage('landing_page_last', window.location.pathname)
  }
  gam.addToStorage('last_page_seen', window.location.pathname)
  if (!gamUserTracking.first_visit_time) {
    gam.addToStorage('first_visit_time', new Date())
  }
  gam.addToStorage('last_visit_time', new Date())
  gam.addToStorage('pageviews', gamUserTracking.pageviews ? gamUserTracking.pageviews + 1 : 1)
  gam.addToStorage('user_agent', navigator.userAgent)
  const ga_cid = gam.readCookie('_ga')
  gam.addToStorage('ga_cid', typeof ga_cid !== 'undefined' ? ga_cid : '')
  // refresh the variable
  gamUserTracking = gam.getObjectFromStorage('gam_user_tracking')
  if (gam.config.debug) {
    // console.log('GAM: Updated gamUserTracking', gamUserTracking)    // # DEV
  }
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
      //   for (
      //     let domainIndex = 0;
      //     domainIndex < gam.config.urlDecorator.urlsToDecorate.length;
      //     domainIndex++
      //   ) {      // #DEV: old ways
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
            (gam.config.urlDecorator.decorateOnOwnDomain || linkObj.host !== window.location.host)
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
