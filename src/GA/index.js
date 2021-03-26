export const gaTshue = (su) => {
  gtag('event', 'search', {
    search_term: su,
  });
};

export const gaThiann = (hanji, lomaji) => {
  gtag('event', 'thiann', {
    event_category: 'engagement',
    event_label: hanji,
    hanji,
    lomaji,
  });
};

export const gaLeKu = (hanji, lomaji) => {
  gtag('event', 'lē-kù', {
    event_category: 'engagement',
    event_label: hanji,
  });
};

export const gaUaGi = (su) => {
  gtag('event', 'uá-gī', {
    event_category: 'engagement',
    event_label: su,
  });
};
