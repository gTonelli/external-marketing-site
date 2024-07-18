'use client'
import { useEffect } from 'react'

export function Intercom() {
  useEffect(() => {
    var w = window
    var ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      ic('update', w.intercomSettings)
    } else {
      var d = document
      var i: any = function () {
        i.c(arguments)
      }
      i.q = []
      i.c = function (args: any) {
        i.q.push(args)
      }
      w.Intercom = i
      var l = function () {
        var s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = 'https://widget.intercom.io/widget/qth7i18v'
        var x = d.getElementsByTagName('script')[0]
        x.parentNode?.insertBefore(s, x)
      }
      if (document.readyState === 'complete') {
        l()
      } else if (w.attachEvent) {
        w.attachEvent('onload', l)
      } else {
        w.addEventListener('load', l, false)
      }
    }

    window.Intercom('boot', {
      app_id: 'qth7i18v',
      name: '{{ site.current_user.first_name }}',
      email: '{{ site.current_user.email }}',
      created_at: '{{ site.current_user.created_at }}',
    })
  }, [])

  return null
}
