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
