export const amenityIcons = {
  wifi: <Wifi className="w-5 h-5" />,
  tv: <Tv className="w-5 h-5" />,
  wheelchair: <Wheelchair className="w-5 h-5" />,
  dining: <Utensils className="w-5 h-5" />,
  bed: <Bed className="w-5 h-5" />
};

export const translateAmenity = (name) => {
  const translationMap = {
    'Бесплатный Wi-Fi': 'wifi',
    'Телевизор': 'tv',
    'Ресторан': 'dining',
    'Кондиционер': 'bed',
    'Доступ для инвалидов': 'wheelchair'
  };
  return translationMap[name] || 'bed';
};