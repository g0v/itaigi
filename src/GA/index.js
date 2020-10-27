export const gaTshue = (su) => {
  gtag('event', 'search', {
       'search_term': su
     })
}

export const gaThiann = (hanji, lomaji) => {
  gtag('event', 'thiann', {
       'event_category': 'engagement',
       'event_label': hanji,
       'hanji': hanji,
       'lomaji': lomaji
     })
}

export const gaLeKu = (hanji, lomaji) => {
  gtag('event', 'leku', {
    'event_category': 'engagement',
    'event_label': hanji
  })
}
